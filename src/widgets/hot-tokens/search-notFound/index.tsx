import { SearchGradientIcon } from "@/shared/icons/SearchGradientIcon"
import { LoginTitle } from "@/widgets/loginTitle"

export const SearchNoFound = () => {
  return (
    <div className="flex flex-1 justify-center items-center">
      <LoginTitle
        cl={'mt-8'}
        icon={<SearchGradientIcon />}
        title={"No Results Found"}
        text={"Please make sure all words are spelled correctly"}
      />
    </div>
  )
}
