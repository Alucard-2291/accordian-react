import React, { useState } from 'react';
import questions from './data';
import Question from './Question';
function App() {
  return (
    <main>
      <div className="container">
        <h3>questions and answers about login</h3>
        <section className="info">
          {questions.map((question) => {
            return (
              <Question
                key={question.id}
                id={question.id}
                title={question.title}
                info={question.info}
              />
            );
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
