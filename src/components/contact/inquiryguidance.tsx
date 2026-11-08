
import { useQuery } from '@tanstack/react-query'
import { getInquiryCategories } from '../../api'

type InquiryGuidanceProps = {
  selectedCategoryId: string | null
  onSelectCategory: (id: string) => void
}

function InquiryGuidance({
  selectedCategoryId,
  onSelectCategory,
}: InquiryGuidanceProps) {
  const {
    data: categories,
    isPending,
    isError,
    refetch,
  } = useQuery({
    queryKey: ['inquiry-categories'],
    queryFn: getInquiryCategories,
  })

  // Select the first category by default.
  const activeCategoryId =
    selectedCategoryId ?? categories?.[0]?.id

  return (
    <section aria-labelledby="inquiry-heading">
      <h2
        id="inquiry-heading"
        className="text-[24px] font-bold text-[#242424]"
      >
        What brings you here?
      </h2>

      <p className="mt-3 text-[14px] leading-relaxed text-[#5F6368]">
        Pick the closest topic in the form. We'll take it from there.
      </p>

      <div className="mt-5 flex flex-col gap-[18px]">
        {isPending && (
          <p className="text-[#5F6368]" role="status">
            Loading inquiry categories...
          </p>
        )}

        {isError && (
          <div role="alert">
            <p className="text-red-600">
              Failed to load inquiry categories.
            </p>
            <button
              type="button"
              onClick={() => refetch()}
              className="mt-2 text-[#1967D2] underline"
            >
              Try again
            </button>
          </div>
        )}

        {categories?.length === 0 && (
          <p className="text-[#5F6368]">
            No inquiry categories are available.
          </p>
        )}

        {categories?.map((category) => {
          const isSelected =
            activeCategoryId === category.id

          return (
            <button
              key={category.id}
              type="button"
              onClick={() => onSelectCategory(category.id)}
              aria-pressed={isSelected}
              className={`
                flex min-h-[88px] w-full items-center
                gap-5 rounded-[16px] border
                px-5 py-4 text-left
                transition-colors duration-200
                ${
                  isSelected
                    ? 'border-[#E8F0FE] bg-[#E8F0FE]'
                    : 'border-[#DADCE0] bg-white hover:bg-[#F8F9FA]'
                }
              `}
            >
              {/* Category icon */}
              <span
                aria-hidden="true"
                className="w-6 shrink-0 text-center text-[32px] leading-7 text-[#1967D2]"
              >
                {category.icon}
              </span>

              {/* Category text */}
              <span className="flex flex-col gap-1">
                <span className="text-[16px] font-medium text-[#242424]">
                  {category.label}
                </span>

                <span className="text-[13px] leading-relaxed text-[#5F6368]">
                  {category.description}
                </span>
              </span>
            </button>
          )
        })}
      </div>
    </section>
  )
}

export default InquiryGuidance
