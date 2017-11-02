import * as React from 'react';
import * as Constants from '../../common/constants';

export interface Props {
}

export const Postcards: React.StatelessComponent<Props> = (props: Props) => (
  <section className="postcards">
    <h1 className="hypothesis__title">Send 5 Cards to Voters</h1>
    <img className="postcards__example" src="/img/postcards.png" alt="5 Calls Postcards"/>
    {/*tslint:disable-next-line:max-line-length*/}
    <p>Support the upcoming <strong>special election in Alabama</strong> with handwritten postcards to help get out the vote in this critical Senate race!</p>
    {/*tslint:disable-next-line:max-line-length*/}
    <p><strong>For $5, you'll get 5 pre-stamped, pre-addressed postcards to critical voters in Alabama</strong>. After receiving your set of 5 cards in the mail, simply add your own personal message and put them right back in the mail. No need to get supplies or even leave your home!</p>
    <h2><a href="https://secure.actblue.com/donate/5calls-postcards">Get Your Voter Postcards Here</a></h2>
    {/*tslint:disable-next-line:max-line-length*/}
    <p>We specifically designed our postcards to help voters make a plan to vote, which research has shown to increase voter turnout. The $5 cost goes straight to printing, packaging, and postage, please consider a small additional donation to help support 5 Calls!</p>
    <p><strong>If you're a group who wants to throw a postcard party,</strong> we're working with our printer to get bulk pricing, <a href={`mailto:${Constants.contact.email}`}>get in touch with us</a> for even more.</p>
    <h3>Why is it important to get out the vote for this election?</h3>
    <ul>
      {/*tslint:disable-next-line:max-line-length*/}
      <li>There is no early voting! Mail-in ballots are only available for special cases, therefore voting on election day is the only option for most people.</li>
      {/*tslint:disable-next-line:max-line-length*/}
      <li>Voter turnout for special elections is always challenging. This election falls in the holiday season, potentially suppressing turnout.</li>
      <li>Recent polling has the 2 candidates running neck and neck, this election will be won on voter turnout.</li>
    </ul>
    <h3>Talking points you can include in your personal postcard message:</h3>
    <ul>
      <li>Polls will be open from 7am - 7pm.</li>
      {/*tslint:disable-next-line:max-line-length*/}
      <li>Polling locations can be found at <a href="http://www.alabamavotes.gov" target="_blank">www.alabamavotes.gov</a></li>
      {/*tslint:disable-next-line:max-line-length*/}
      <li>Since 2014, voters in Alabama have been required to bring ID to the polls. They can find information on acceptable ID or how to get a free ID at <a href="http://www.alabamavotes.gov" target="_blank">www.alabamavotes.gov</a></li>
      <li>Remember to keep postcard messaging positive and encouraging. The best messaging is sincere and authentic.</li>
    </ul>
    <h3>Postcard message examples:</h3>
    <blockquote>
      <p>Dear Voter,</p> 
      {/*tslint:disable-next-line:max-line-length*/}
      <p>Participating in elections is a critical way to make your voice heard in our democracy! Every vote counts! Don’t miss your chance to vote in the special election on Dec. 12. Polls are open from 7 am-7 pm, more info can be found at www.alabamavotes.gov</p>
      <p>Thank you for being a voter!</p>
      <p>Eleanor</p>
      <p>Durham, NC</p>
    </blockquote>
    <blockquote>
      <p>Hi Voter!</p>
      {/*tslint:disable-next-line:max-line-length*/}
      <p>I’m writing to you to ask you to vote in the special election on Dec 12th. Voting is the best way to make your voice heard in our democracy, and now more than ever we all need to vote vote VOTE! Just as a reminder, polls are open from 7am-7pm and you can find your polling location at www.alabamavotes.gov. Good luck on Election Day and THANK YOU for being a voter!</p>
      <p>Jennifer</p>
      <p>Phoenix, Arizona</p>
    </blockquote>
  </section>
);