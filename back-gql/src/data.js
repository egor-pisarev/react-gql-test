/*
MySQL Scheme

CREATE TABLE Phase (
id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
title VARCHAR(30) NOT NULL,
order INT(6) UNSIGNED,
isCompleted VARCHAR(30) NOT NULL,
)

CREATE TABLE Task (
id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
title VARCHAR(30) NOT NULL,
isCompleted VARCHAR(30) NOT NULL,
order INT(6) UNSIGNED,
phase_id INT(6) UNSIGNED,
INDEX (phase_id)
)
*
* */

let isComplete = false;
const phases = [
  {
    id: 1,
    title: 'Foundation',
    isComplete: false,
    isCanComplete: true,
    order: 1,
    tasks: [
      {
        id: 1,
        title: 'Setup virtual office',
        isComplete: false,
        order: 1,
      },
      {
        id: 2,
        title: 'Set mission and vision',
        isComplete: false,
        order: 2,
      }
    ]
  },
  {
    id: 2,
    title: 'Discovery',
    isComplete: false,
    isCanComplete: false,
    order: 2,
    tasks: [
      {
        id: 3,
        title: 'Create roadmap',
        isComplete: false,
        order: 1,
      },
      {
        id: 4,
        title: 'Competitor analysis',
        isComplete: false,
        order: 2,
      }
    ]
  },
];

module.exports = {
  isComplete,
  phases
}
