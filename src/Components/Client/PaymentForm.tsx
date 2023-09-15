import {SafeAreaView, View, Text, StyleSheet, ScrollView, TextInput, Pressable} from 'react-native';
import DuePaymentList from './Lists/DuePaymentList';

import React, { useState } from 'react';
import dueItems from '../../../JsonData/items.json'



export default function PaymentForm(){
    
    return(

        <SafeAreaView>
            <ScrollView>
            <View style={styles.container}>
                <Text style={styles.textHeader} >Pay Dues</Text>
                <Text style={styles.textSubHeader} >Easily pay your outstanding dues online with our convenient and secure payment platform.</Text>
                <View>
                    <Text style={styles.textLabel}>Item Name</Text>
                    <TextInput style={styles.textInput}  placeholder='Enter item name'></TextInput>
                    <Text style={styles.textLabel}>Item Price</Text>
                    <TextInput style={styles.textInput}  placeholder='Enter amount to be paid'></TextInput>
                    <Text style={styles.textLabel}>Required Collectible</Text>
                    <TextInput style={styles.textInput} editable={false} value='2500'></TextInput>
                    <Text style={styles.textLabel}>Reference Number</Text>
                    <TextInput style={styles.textInput} placeholder='Enter reference Number here'></TextInput>
                    <Text style={styles.textLabel}>Type of Payment</Text>
                    <View style={styles.buttonContainer}>
                    <Pressable style={styles.button}>
                        <Text style={styles.buttonLabel}>Continue</Text>
                    </Pressable>
                </View>       
                </View>
            </View>    
            </ScrollView>     
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container:{
        paddingTop: 120, 
        paddingHorizontal: 21
    }, 
    textHeader:{
        fontSize: 32,
        fontWeight: 'bold', 
        color: '#203949',
        paddingHorizontal: 15,
        
    },
    textSubHeader:{
        fontSize: 18,
        color: '#203949',
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginBottom: 10,
    },
    textLabel:{
        paddingTop: 20,
        fontSize: 15,
        paddingHorizontal: 15,
        marginVertical: 5
    },
    textInput:{
        fontSize: 17,
        paddingHorizontal: 15,
        marginHorizontal: 15,
        marginVertical: 5,
        borderColor: "#523009",
        borderWidth: .5,

    },
    buttonContainer: {
        height: 50,
        backgroundColor:'#2C85E7',
        marginLeft: 10,
        justifyContent:'space-evenly',
        borderRadius: 5,
        marginTop: 70
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
        fontSize: 12
    },

    
});