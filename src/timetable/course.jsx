import React from 'react';
import Radium from 'radium';
import {Link} from 'react-router';
import FlatButton from 'material-ui/FlatButton';

const RadiumLink = Radium(Link);

@Radium
export default class TimeTableCourse extends React.Component {
  render() {
    let course = this.props.courses[this.props.index];
    let len = this.props.maxLength;
    let width = this.props.width;
    let height = this.props.height / this.props.courses.length;
    let aspect = width / len / height;
    let color = course.color;
    let containerStyle = {
      display: 'table-row',
      textDecoration: 'none',
      ':hover': {
        opacity: 0.5,
      },
    };
    let style = {
      width,
      height,
      fontSize: Math.min(width / len, height * 0.3),
      backgroundColor: color.hsl(1, 0.5),
      backgroundImage: color.gradient('to right', [0.9, 0.7], [0.9, 0.75]),
      boxShadow: color.shadow(0, 0, 0, 1, 1, 0.4, true),
      display: 'table-cell',
      verticalAlign: 'middle',
      minWidth: 0,
      lineHeight: 'initial',
      borderRadius: 0,
    };
    const locationStyle = {
      display: 'block',
      fontSize: '50%',
    };
    if (aspect > 0.7) {
      containerStyle.display = 'table-cell';
      style.width /= this.props.courses.length;
      style.height = this.props.height;
    }
    return (
      <RadiumLink to={`/course/${course.id}`} style={containerStyle}>
        <FlatButton
          //href={`#/course/${course.id}`}
          style={style}
        >
          {course.label}
          <small style={locationStyle}>
            {course.schedule.location}
          </small>
        </FlatButton>
      </RadiumLink>
    );
  }
}
