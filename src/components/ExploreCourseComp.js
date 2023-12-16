import ExploreCourseCSS from "./ExploreCourseComp.module.css";
import Button from 'react-bootstrap/Button';
function ExploreCourseComp() {
  return (
    <>
    <div className={ExploreCourseCSS["explore-course-box"]}>
        <div className={ExploreCourseCSS["text-stack"]}>
          <div className={ExploreCourseCSS["text-content"]}>
          <h4>You only bought one course</h4>
          <p>We have many courses for you, start learning today.</p>
          <p>View our course catalog and enroll in a course.</p>
          <Button variant="dark">Browse courses</Button>
          </div>
        </div>
        <div className={ExploreCourseCSS["img-box"]}>
        <img src="https://cdn-icons-png.flaticon.com/128/123/123400.png"/>
        </div>
    </div>
    </>
  );
}

export default ExploreCourseComp;
