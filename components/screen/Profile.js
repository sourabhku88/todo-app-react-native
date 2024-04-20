import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, ScrollView, Button, TouchableOpacity, Modal, TextInput } from 'react-native'
import SelectDropdown from 'react-native-select-dropdown'


const Item = ({ item, selected, onPress }) => (
    <TouchableOpacity onPress={onPress}>
        <Text style={{ fontWeight: selected ? 'bold' : 'normal' }}>{item.title}</Text>
        {selected && (
            <View>
                <Text>Status: {item.status}</Text>
                {item.button && (
                    <TouchableOpacity onPress={onPress}>
                        <Text>Close</Text>
                    </TouchableOpacity>
                )}
            </View>
        )}
    </TouchableOpacity>
);

export default Profile = ({ navigation, route }) => {
    const [selectedTitle, setSelectedTitle] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [inputText, setInputText] = useState('');
    const [todo, setTodo] = useState([
        { title: 'Create a react native App', status: 'pendding' },
        { title: 'Convert into APK file for Instsll in your own Phone', status: 'pendding' },
        { title: 'This two taks Your should Complete today EOD.', status: 'pendding' },
    ])

    const handleTitleClick = (title) => {
        setSelectedTitle(selectedTitle === title ? '' : title);
    };

    const showModal = () => {
        setModalVisible(true);
    };

    const hideModal = () => {
        setModalVisible(false);
    };

    const handleAdd = () => {
        setTodo([...todo, { title: inputText, status: "pendding" }]);
        setInputText('');
        hideModal();
    };

    const options = [
        { title: 'Done', },
        { title: 'pending', },
        { title: 'In Progress', },
    ];

    return (
        <ScrollView contentContainerStyle={styles.scrollView}>
            <View style={{ justifyContent: "space-between" }}>
                <Text style={styles.todoTitle}> Your Todo </Text>
                <TouchableOpacity style={[styles.button, { backgroundColor: 'green' }]} onPress={showModal}>
                    <Text style={[styles.buttonText, { textAlign: "center", fontWeight: "bold" }]}>Add</Text>
                </TouchableOpacity>
            </View>
            <View>
                {todo.map((item, i) => {
                    return (
                        <View key={i} style={styles.todoData}>
                            <TouchableOpacity onPress={() => handleTitleClick(item.title)}>
                                <Text style={{ fontWeight: selectedTitle === item.title ? 'bold' : 'normal' }}>
                                    {item.title}
                                </Text>
                            </TouchableOpacity>
                            {selectedTitle === item.title && (
                                <View style={styles.content}>
                                    <Text>
                                        {/* <SelectDropdown data={options} onSelect={(selectedItem, index) => {
                                            console.log(selectedItem, index);
                                        }}
                                            renderButton={(selectedItem, isOpened) => {
                                                return (
                                                    <View style={styles.dropdownButtonStyle}>
                                                        <Text style={styles.dropdownButtonTxtStyle}>
                                                            {(selectedItem && selectedItem.title) || 'Select your status'}
                                                        </Text>
                                                    </View>
                                                );
                                            }}
                                            renderItem={(item, index, isSelected) => {
                                                return (
                                                    <View style={{ ...styles.dropdownItemStyle, ...(isSelected && { backgroundColor: '#D2D9DF' }) }}>
                                                        <Text style={styles.dropdownItemTxtStyle}>{item.title}</Text>
                                                    </View>
                                                );
                                            }}
                                            showsVerticalScrollIndicator={false}
                                            dropdownStyle={styles.dropdownMenuStyle}
                                        /> */}
                                        <TouchableOpacity style={[styles.button, { backgroundColor: '#ff2222' }]} onPress={() => console.log("Delete button pressed")}>
                                            <Text style={styles.buttonText}>Delete</Text>
                                        </TouchableOpacity>
                                        {/* <TouchableOpacity style={[styles.button, { backgroundColor: '#ffff1ad9' }]} onPress={() => console.log("Updated button pressed")}>
                                            <Text style={styles.buttonText}>Update</Text>
                                        </TouchableOpacity> */}
                                    </Text>
                                </View>
                            )}
                        </View>
                    )
                })}
            </View>

            <View style={styles.container}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={hideModal}
                >
                    <TouchableOpacity
                        style={styles.modalContainer}
                        activeOpacity={1}
                        onPressOut={hideModal} // Close modal when clicking outside of it
                    >
                        <View style={styles.modalContent}>
                            <TextInput
                                style={styles.input}
                                placeholder="Enter something"
                                onChangeText={text => setInputText(text)}
                                value={inputText}
                            />
                            <Button title="Add" onPress={handleAdd} />
                        </View>
                    </TouchableOpacity>
                </Modal>
            </View>
            <StatusBar style="auto" />
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    todoTitle: {
        marginVertical:15,
        textAlign: "center",
        fontSize: 18,
        fontWeight: "bold",
    },
    todoData: {
        backgroundColor: "gray",
        borderRadius: 5,
        height: 30,
        alignItems: "center",
        flexDirection: 'row',
        margin: 10,
        textAlign: "center",
        fontSize: 20,
        paddingVertical: 18,
        paddingHorizontal: 12,
    },
    button: {
        marginHorizontal: 3,
        borderRadius: 5,
        paddingVertical: 6,
        paddingHorizontal: 8,
        fontWeight: "bold",
    },
    dropdownButtonStyle: {
        width: 150,
        backgroundColor: '#E9ECEF',
        borderRadius: 15,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 12,
        paddingVertical: 4,
    },
    dropdownButtonTxtStyle: {
        flex: 1,
        fontSize: 15,
        fontWeight: '500',
        color: '#151E26',
    },
    dropdownButtonArrowStyle: {
        fontSize: 28,
    },
    dropdownMenuStyle: {
        // backgroundColor: '#E9ECEF',
        borderRadius: 5,
    },
    dropdownItemStyle: {
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: 12,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 8,
    },
    dropdownItemTxtStyle: {
        flex: 1,
        fontSize: 18,
        fontWeight: '500',
        color: '#151E26',
    },

    heading: {
        backgroundColor: "red",
        margin: 10,
        borderRadius: 3,
    },
    title: {
        fontSize: 12,
        padding: 10,
        color: 'white',
    },
    content: {
        backgroundColor: 'lightgray',
        padding: 10,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: 300,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        elevation: 5,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
})