import Responsive from "../../components/common/responsive"
import CmmtForm from "./cmmtForm"
import CmmtList from "./cmmtList"

const Comment = () => {
  return (
    <Responsive>
      <h3>Comment Page</h3>
      <CmmtForm />
      <CmmtList />
    </Responsive>
  )
}

export default Comment