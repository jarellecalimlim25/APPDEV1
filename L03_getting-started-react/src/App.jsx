import './App.css'

function App() {
  return (
    <div className="container">
      <div className="card">
        <h1>ABOUT ME</h1>
        <hr />

        <section>
          <h2>PERSONAL INFORMATION</h2>
          <p><strong>Full Name:</strong> Jarelle B. Calimlim</p>
          <p><strong>Course and Year:</strong> BS Information Systems - 3rd Year</p>
        </section>

        <section>
          <h2>FUN FACT ABOUT ME</h2>
          <ul>
            <li>I enjoy listening to music while studying or doing assignments.</li>
          </ul>
        </section>

        <hr />

        <section>
          <h2>REFLECTION</h2>
          <p>
            What I have learned so far in this course is the fundamentals of Git,
            GitHub, and React. Through our previous laboratory activities and
            assignments, I gained experience in creating repositories, managing
            files using Git, pushing projects to GitHub, and solving problems when
            commands did not work correctly. We also learned how to build simple
            React applications using JSX. Although some Git commands were difficult
            to understand at first, practicing them helped me become more confident
            in using version control. I believe these skills will help me become a
            better Information Systems student and prepare me for future projects
            and a career in the technology industry.
          </p>
        </section>

        <hr />

        <section>
          <h2>MY GOALS</h2>
          <ol>
            <li>Learn more about React and web development.</li>
            <li>Improve my programming skills.</li>
            <li>Build useful applications that solve real-world problems.</li>
          </ol>
        </section>
      </div>
    </div>
  )
}

export default App