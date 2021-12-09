import { connect } from "react-redux";
import Profile from "./user_profile";

// const mapStateToProps = (state) => {
//   return {
//     // tweets: Object.values(state.tweets.user),
//     // currentUser: state.session.user,
//     null
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchUserTweets: (id) => dispatch(fetchUserTweets(id)),
//   };
// };

export default connect(null, null)(Profile);
