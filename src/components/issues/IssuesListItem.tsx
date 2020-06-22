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
            <span className="visually-hidden" />
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

export default IssuesListItem;
