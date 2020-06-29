import * as React from 'react';
import { Link } from 'react-router-dom';
import { Issue } from '../../common/models';
import { selectIssueActionCreator } from '../../redux/callState';

interface Props {
  readonly issue: Issue;
  readonly isIssueComplete: boolean;
  readonly isIssueActive: boolean;
  readonly contactsCount: number;
  readonly completeCount: number;
}

interface State {}

export class IssuesListItem extends React.Component<Props, State> {
  render() {
    const { completeCount, contactsCount, isIssueActive, issue } = this.props;
    const isCompleted =
      completeCount > 0 && completeCount === contactsCount ? 'is-complete' : '';
    const isActive = isIssueActive ? 'is-active' : '';
    const issueLink = `/issue/${issue.slugOrID()}`;

    return (
      <li>
        <Link
          aria-controls="content"
          className={`issues-list__item ${isCompleted} ${isActive}`}
          to={issueLink}
          onClick={() => selectIssueActionCreator(issue.id.toString())}
        >
          <span
            aria-live="polite"
            className={`issues-list__item__status ${isCompleted} ${isActive}`}
          >
            {isCompleted ? (
              <span className="visually-hidden" />
            ) : (
              getProgressCircle(isIssueActive, completeCount, contactsCount)
            )}
          </span>
          <span
            className={`issues-list__item__title ${isCompleted} ${isActive}`}
          >
            {issue.name}
          </span>
          <span
            className={`issues-list__item__summary ${isCompleted} ${isActive}`}
          >
            {/* TODO: Finish this impl */}
            <span>X calls to make</span>
          </span>
        </Link>
      </li>
    );
  }
}

function getProgressCircle(
  isIssueActive: boolean,
  completeCount: number,
  contactsCount: number
) {
  const R = 18;
  const C = 113; // 2 * Pi * R
  const dashLength = (C * completeCount) / contactsCount;
  const width = 4;
  const circleStyle1 = {
    fill: 'transparent',
    stroke: '#e5e5e5',
    strokeWidth: `${width}`
  };
  const circleStyle2 = {
    fill: 'transparent',
    stroke: '#2ab371',
    strokeWidth: `${width}`,
    strokeDasharray: `${dashLength} ${C - dashLength}`,
    strokeDashoffset: `${C / 4}`
  };

  return (
    <svg
      viewBox={`0 0 ${R * 2} ${R * 2}`}
      xmlns="http://www.w3.org/2000/svg"
      style={{ overflow: 'visible' }}
    >
      <circle cx={`${R}`} cy={`${R}`} r={`${R}`} style={circleStyle1} />
      <circle cx={`${R}`} cy={`${R}`} r={`${R}`} style={circleStyle2} />
    </svg>
  );
}

export default IssuesListItem;
