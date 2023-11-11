import FriendsBlock from "./FriendsBlock";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogs: state.messagesPage.dialogs,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {}
}

const FriendsBlockContainer = connect(mapStateToProps, mapDispatchToProps)(FriendsBlock);
export default FriendsBlockContainer;