
import './App.css';
import { HashRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import LandingRented from './pages/LandingRented';
import RegistrationPage from './pages/RegistrationPage';
import LoginPage from './pages/LoginPage';
import FitmodousPage from './pages/FitmodousPage';
import TotalEarningsPage from './pages/TotalEarningsPage';
import SubscribersPage from './pages/SubscribersPage';
import TotalViewsPage from './pages/TotalViewsPage';
import UploadVideo from './pages/UploadVideo';
import YourBio from './pages/YourBio';
import CreateNotification from './pages/CreateNotification';
import CreateEventPage from './pages/CreateEventPage';
import YourBankDetailsPage from './pages/YourBankDetailsPage';
import NewSubscriberPage from './pages/NewSubscriberPage';
import DashboardPage from './pages/DashboardPage';
import YourPackagesPage from './pages/YourPackagesPage';
import CreateNewPackagePage from './pages/CreateNewPackagePage';
import YourVideosPage from './pages/images/YourVideosPage';
import ChatPage from './pages/ChatPage';
import FeedBackPage from './pages/FeedBackPage';
import GetInTouchPage from './pages/GetInTouchPage';
import PrivacyAndPolicyPage from './pages/PrivacyAndPolicyPage';
import PremiumMembersPage from './pages/PremiumMembersPage';
import SubscriberPage from './pages/SubscriberPage';
import NewEventsPage from './pages/NewEventsPage';
import TermsAndConditionPage from './pages/TermsAndConditionPage';
import FillInformationPage from './pages/FilInformationPage';
import { AvailableEventsPage } from './pages/AvailableEventsPage';
import { YourEventDetailsPage } from './pages/YourEventDetailsPage';
import { LivePageUser } from './pages/LivePageUser';
import { LivePageAddNotes } from './pages/LivePageAddNotes';
import BackNotesPage from './pages/BackNotesPage';
import { AttendingPage } from './pages/AttendingPage';
import { EndLivePage } from './pages/EndLivePage';
import EventInformationPage from './pages/EventInformationPage';
import UpComingEventPage from './pages/UpComingEventPage';
import PayAmountPage from './pages/PayAmountPage';
import PostYourAnswersPage from './pages/PostYourAnswersPage';
import SubscriptionPackagesPage from './pages/SubscriptionPackagesPage';
import SubscribedChannelsPage from './pages/SubscribedChannelsPage';
import FitGymPage from './pages/FitGymPage';
import CompletePaymentPage from './pages/CompletePaymentPage';
import PurchasePlanPopup from './component/PurchasePlanPopup';

function App() {
  return (
    <div className="App">
          <Router>
          <Switch>
        
         <Route path="/Serviceproviders" component={LandingRented} exact />
         <Route path="/RegistrationPage" component={RegistrationPage} exact />
         <Route path="/LoginPage" component={LoginPage} exact />
         <Route path="/FitmodousPage" component={FitmodousPage} exact />
         <Route path="/TotalEarningsPage" component={TotalEarningsPage} exact />
         <Route path="/SubscribersPage" component={SubscribersPage} exact />
         <Route path="/TotalViewsPage" component={TotalViewsPage} exact />
         <Route path="/UploadVideo" component={UploadVideo} exact />
         <Route path="/YourBio" component={YourBio} exact />
         <Route path="/CreateNotification" component={CreateNotification} exact />
         <Route path="/CreateEventPage" component={CreateEventPage} exact />
         <Route path="/YourBankDetailsPage" component={YourBankDetailsPage} exact />
         <Route path="/NewSubscriberPage" component={NewSubscriberPage} exact />
       <Route path="/DashboardPage" component={DashboardPage} exact /> 
       <Route path="/YourPackagesPage" component={YourPackagesPage} exact /> 
       <Route path="/CreateNewPackagePage" component={CreateNewPackagePage} exact /> 
       <Route path="/YourVideosPage" component={YourVideosPage} exact /> 
       <Route path="/ChatPage" component={ChatPage} exact /> 
       <Route path="/FeedBackPage" component={FeedBackPage} exact /> 
       <Route path="/GetInTouchPage" component={GetInTouchPage} exact /> 
       <Route path="/PrivacyAndPolicyPage" component={PrivacyAndPolicyPage} exact /> 
       <Route path="/PremiumMembersPage" component={PremiumMembersPage} exact /> 
       <Route path="/SubscriberPage" component={SubscriberPage} exact /> 
       <Route path="/NewEventsPage" component={NewEventsPage} exact /> 
       <Route path="/TermsAndConditionPage" component={TermsAndConditionPage} exact /> 
       <Route path="/FillInformationPage" component={FillInformationPage} exact /> 
       <Route path="/AvailableEventsPage" component={AvailableEventsPage} exact /> 
       <Route path="/YourEventDetailsPage" component={YourEventDetailsPage} exact /> 
       <Route path="/LivePageUser" component={LivePageUser} exact /> 
       <Route path="/LivePageAddNotes" component={LivePageAddNotes} exact /> 
       <Route path="/BackNotesPage" component={BackNotesPage} exact /> 
       <Route path="/AttendingPage" component={AttendingPage} exact /> 
       <Route path="/EndLivePage" component={EndLivePage} exact /> 
       <Route path="/EventInformationPage" component={EventInformationPage} exact /> 
       <Route path="/UpComingEventPage" component={UpComingEventPage} exact /> 
       <Route path="/PayAmountPage" component={PayAmountPage} exact /> 
       <Route path="/PostYourAnswersPage" component={PostYourAnswersPage} exact /> 
       <Route path="/SubscriptionPackagesPage" component={SubscriptionPackagesPage} exact /> 
       <Route path="/SubscribedChannelsPage" component={SubscribedChannelsPage} exact /> 
       <Route path="/FitGymPage" component={FitGymPage} exact /> 
       <Route path="/CompletePaymentPage" component={CompletePaymentPage} exact /> 
       <Route path="/PurchasePlanPopup" component={PurchasePlanPopup} exact /> 
        <Redirect to="/"/>
        </Switch>
        </Router>
    {/* <Head/> */}
    </div>
  );
}

export default App;
