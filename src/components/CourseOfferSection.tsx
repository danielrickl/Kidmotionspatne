import { courses } from '../data';

export function CourseOfferSection(): JSX.Element {
  return (
    <section id="nabidka" className="section" aria-labelledby="nabidka-heading">
      <div className="section-heading-wrap">
        <p className="section-kicker">Aktualni nabidka kurzu</p>
        <h2 id="nabidka-heading">Vyberte kurz podle veku a typu pohybu</h2>
      </div>
      <div className="course-grid">
        {courses.map((course) => (
          <article key={course.title} className="card course-card">
            <h3>{course.title}</h3>
            <p className="pill">Doporuceny vek: {course.age}</p>
            <p>{course.summary}</p>
            <h4>Co se na lekcich rozviji</h4>
            <ul>
              {course.bulletPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <h4>Aktualni terminy</h4>
            <ul>
              {course.schedule.map((term) => (
                <li key={term}>{term}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}