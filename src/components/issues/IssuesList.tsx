import * as React from 'react';
import i18n from '../../services/i18n';
import { Link } from 'react-router-dom';

import { Issue, ContactList } from '../../common/models';
import { IssuesListItem } from './index';

import { userStatsContext, remoteStateContext } from '../../contexts';
import { UserStatsState } from '../../redux/userStats';

interface Props {
  issues: Issue[];
  currentIssue?: Issue;
  completedIssueIds: string[];
  getIssuesIfNeeded: () => void;
  getContactsIfNeeded: (force: boolean) => void;
}

export class IssuesList extends React.Component<Props> {
  componentDidMount() {
    this.props.getIssuesIfNeeded();
    this.props.getContactsIfNeeded(false);
  }

  listFooter = () => {
    return (
      <li>
        <Link to={`/more`} className={`issues__footer-link`}>
          <span>{i18n.t('issues.viewAllActiveIssues')}</span>
        </Link>
      </li>
    );
  };

  listItems = (userStatsState: UserStatsState, contacts: ContactList) => {
    let currentIssueId = this.props.currentIssue
      ? this.props.currentIssue.id
      : 0;

    if (this.props.issues && this.props.issues.map) {
      return this.props.issues.map(issue => (
        <IssuesListItem
          key={issue.id}
          issue={issue}
          isIssueComplete={
            issue.numberOfCompletedContacts(contacts, userStatsState.all) > 0
          }
          contactsCount={issue.numberOfContacts(contacts)}
          completeCount={issue.numberOfCompletedContacts(
            contacts,
            userStatsState.all
          )}
          isIssueActive={currentIssueId === issue.id}
        />
      ));
    } else {
      return (
        <div style={{ textAlign: 'center' }}>{i18n.t('noCalls.title')}</div>
      );
    }
  };

  render() {
    return (
      <userStatsContext.Consumer>
        {userStatsState => (
          <remoteStateContext.Consumer>
            {remoteState => (
              <ul className="issues-list" role="navigation">
                {this.listItems(userStatsState, remoteState.contacts)}
                {this.listFooter()}
              </ul>
            )}
          </remoteStateContext.Consumer>
        )}
      </userStatsContext.Consumer>
    );
  }
}
