import UpcomingLessonCSS from "./UpcomingLesson.module.css";
import Button from 'react-bootstrap/Button';

function UpcomingLessonComp() {
  return (
    <>
    <div className={UpcomingLessonCSS["upcoming-lesson-box"]}>
        <div className={UpcomingLessonCSS["header-text"]}>Upcoming lessons</div>
        <div className={UpcomingLessonCSS["content-box"]}>
            <div className={UpcomingLessonCSS["info-box"]}>
            <p className={UpcomingLessonCSS["lesson-name"]}>How to smash your a levels</p>
            <p className={UpcomingLessonCSS["lesson-date"]}>Lesson 1 starts at 19:00 am</p>
            </div>
            <Button variant="light">Join now</Button>
        </div>
    </div>
    </>
  );
}

export default UpcomingLessonComp;
