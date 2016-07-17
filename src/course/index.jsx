import React from 'react';
import {
  Card, 
  CardTitle, 
  CardText
} from 'material-ui/Card';

import userData from '../testdata';

export default class Course extends React.Component {
  constructor(props) {
    super(props);
    this.courses = userData.courses;
    this.weeks = userData.weeks;
    this.periods = userData.periods;
  }

  static title(params) {
    /* TODO: userData置き換える */
    let course = userData.courses.filter(c => c.id == params.id)[0];
    return course.title;
  }

  render() {
    let course = this.courses.filter(c => c.id == this.props.params.id).pop();
    return(
      <Card>
        <CardTitle
          title={course.title}
          subtitle={course.label}
        />
        <CardText>
          {course.schedules.map(schedule => {
            let week = this.weeks[schedule.week];
            let period = this.periods[schedule.period];
            return `${week} ${period}`;
          }).join(', ')}
        </CardText>
      </Card>
    );
  }
}
