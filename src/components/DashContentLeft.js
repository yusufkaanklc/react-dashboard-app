import DashContentLeftCSS from "./DashContentLeft.module.css";
import ExploreCourseComp from "./ExploreCourseComp";
import UpcomingLessonComp from "./UpcomingLessonComp";
import TodoList from "./TodoList";
function DashContentLeft() {
  return (
    <>
    <div className={DashContentLeftCSS["dashboard-content-left"]}>
        <ExploreCourseComp/>
        <UpcomingLessonComp/>
        <TodoList/>
    </div>
    </>
  );
}

export default DashContentLeft;
