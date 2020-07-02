const { StyleSheet } = require("react-native");

const Styles = StyleSheet.create({
    header: {
        flex: 1,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center"
    },
    footer: {
        justifyContent: 'flex-end'
    },
    title: {
        alignItems: "center",
        margin: 5,
    },
    titleLogo: {
        color: '#fff',
        fontSize: 23,
        fontWeight: 'bold',
    },
    marcoButton: {
        margin: 10,
        paddingHorizontal: 15,
        marginEnd: 20,
    },
    buttonSign: {
        alignItems: "center",
        backgroundColor: "#009D99",
        padding: 10
    },
    buttonLog: {
        alignItems: "center",
        backgroundColor: "#000000",
        padding: 10,
        borderWidth: 3,
        borderColor: "#009D99",
        borderRadius: 6,
    },
 });
export default  Styles;