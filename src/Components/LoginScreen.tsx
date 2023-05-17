import React from "react";
import { SafeAreaView, Text, View, StyleSheet, Pressable, TextInput} from "react-native";

export default function LoginScreen(){
    return(
        <SafeAreaView>
            <Text style={styles.textStyleSubheader}>Back</Text>
            <Text style={styles.textStyleHeader}>Login</Text>

            <View style={styles.buttonUnfilledContainer}>
                <Pressable style={styles.buttonUnfilled}>
                    <Text style={styles.buttonUnfilledLabel}>No account yet? Register Now!</Text>
                </Pressable>
            </View>


            <Text style={styles.textStyleSmallest}>Forgot Password?</Text>

            <TextInput style={styles.textBoxStyle} placeholder="Enter username" ></TextInput>
            <TextInput style={styles.textBoxStyle} placeholder="Enter password" ></TextInput>
            <View style={styles.buttonContainer}>
                <Pressable style={styles.button} onPressIn={()=>alert("Logged")}>
                    <Text style={styles.buttonLabel}>Login</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );

}

const styles = StyleSheet.create({
    textStyleSubheader:{
        paddingTop: 35, 
        paddingBottom: 25
    },
    textStyleHeader:{
        fontSize: 55, 
        fontWeight: 'bold', 
    },

    textStyleSmallest:{
        fontSize: 13,
        alignItems:'center',
        justifyContent:'center', 
        marginTop: 16,
        marginBottom:16, 
        paddingLeft:115
    },

    textBoxStyle:{
        width: 340, 
        height: 50, 
        paddingLeft: 20,
        borderColor: '#F0F2F4', 
        borderWidth: 2,
        marginBottom: 13, 
        color:'#C2C6CC'
    },

    buttonContainer:{
        width: 340, 
        height: 48, 
        backgroundColor: '#2C85E7',
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRadius: 5, 
        marginTop: 30
    }, 

    button:{
        borderRadius: 10 ,
        width: '100%', 
        height: '100%', 
        alignItems: 'center', 
        justifyContent: 'center', 
        flexDirection: 'row'
    },

    buttonLabel:{
        color: '#fff', 
    },

    buttonUnfilledContainer:{
        width: 340, 
        height: 48, 
        backgroundColor: '#fff',
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRadius: 5, 
        borderColor: '#F0F2F4',
        borderWidth: 2, 
        marginTop: 30
    }, 

    buttonUnfilled:{
        borderRadius: 10 ,
        width: '100%', 
        height: '100%', 
        alignItems: 'center', 
        justifyContent: 'center', 
        flexDirection: 'row'
    },

    buttonUnfilledLabel:{
        color: '#4A5B6B', 
    }
});