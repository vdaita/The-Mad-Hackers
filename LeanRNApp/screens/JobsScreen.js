import React from 'react'
import {View, Text, StyleSheet, FlatList, Image, RefreshControl, ScrollView} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {Ionicons, Foundation, AntDesign,} from "@expo/vector-icons"
const themecolor = '#fff'
const tabcolor = '#5271ff'

const jobposts = [
    {
        id: "1",
        description: "Salary: 76,000 Benefits: Pool ect.",
        skills: "React Native, Vue.js",
        title: "App Developer",
        image: require("../assets/pic.png"),
        applicants: '1',
        companyname: "Acme Corporation",
    }
]
const company = [
    {
        
        website: "example.com",
        linkedIn: "linkedin.com/company/name",
        image: '',
        contact: 'acme@example.com',
    }
]
export default class ProfileScreen extends React.Component{
    constructor(props){
        super(props)
    
        this.state = {
          refreshing: false,
          checkingForPosts: 0,
        }
    }

    _onRefresh = () => {
        this.setState({refreshing: true});
        setTimeout(() => {
          let oldPosts = this.state.checkingForPosts
          this.setState({
            checkingForPosts: oldPosts + 1,
            refreshing: false,
          });
        }, 2000);
      };
    renderJobPost = jobpost => {
        return (
            this.state.checkingForPosts < 2 ? (<View style={{backroundColor: "#fff",paddingBottom: 100000}}>
                <Text style={{marginTop: 15, color: '#ff0000', fontWeight: 'bold', alignSelf: 'center'}}>No Jobs Found</Text>
                </View>):(
                
                <View style={{paddingBottom: 10000}}>
                <View style={{flexDirection: "row"}}>
                    <Image source={jobpost.image} style={styles.avatar}/>
                    <Text style={{marginTop: 20, marginLeft: 10, fontSize: 20,}}>{jobpost.companyname}</Text>
                </View>
                <View style={{flex:1}}>
                    <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                        <View>
                            <Text style={styles.name}>Job Type: {jobpost.title}</Text>
                        </View>
                        <Ionicons name="ios-more" size={24} color="#73788b"/>
                    </View>

                    <Text style={styles.jobposts}>{jobpost.description}</Text>

                    {/* <Image source={jobpost.image} style={styles.image} resizeMode="cover"/> */}
                    <View style={{flexDirection: "row", flex: 0.8}}>
                        <AntDesign name="copy1" size={24} color="#73788B" style={{marginLeft: 16}}/>
                        <Text style={{marginLeft: 10, fontSize: 20, color:  "#838899", flex: 0.9}}>Skills: {jobpost.skills}</Text>
                    </View>
                    <View style={{flexDirection: "row", marginTop: 30}}>
                        <Foundation name="results-demographics" size={24} color="#73788B" style={{marginLeft: 16}}/>
                        <Text style={{marginLeft: 10, fontSize: 20, color:  "#838899"}}>{jobpost.applicants} Applicant(s)</Text>
                    </View>
                </View>

                <TouchableOpacity style={{paddingTop: 30}} onPress={() => this.props.navigation.navigate('Form Submission')}>
                    <Text style={{marginLeft: 10, fontSize: 20, color: `${tabcolor}`}}>Submit an Application</Text>
                </TouchableOpacity>
                <View style={styles.header}/>
            </View>
            )
        )
    }

    render(){
        return(
            <ScrollView
         refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh}
            title="Getting Data..."
            progressBackgroundColor="#ffff00"
          />
        }
        >

            <View style={styles.container}>
                <FlatList 
                style={styles.feed}
                data={jobposts}
                renderItem={({item}) => this.renderJobPost(item)} keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
                />
            </View>
        </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#fff',
        color:'#fff',

    },
    header: {
        paddingTop: 50,
        backgroundColor: "#FFF",
        alignItems: "center",
        justifyContent: "center",
        borderBottomWidth: 1,
        borderBottomColor: `${tabcolor}`,
        shadowColor: "#454D65",
        shadowRadius: 15,
        
    }, headerTitle: {
        fontSize: 20,
        fontWeight: "500"
    },
    feed: {
        marginHorizontal: 16,
    },
    feedItem: {
        backgroundColor: `${themecolor}`,
        borderRadius: 5,
        padding: 8, 
        flexDirection: "row",
        marginVertical: 8
    },
    avatar: {
        width: 36,
        height: 36,
        marginTop: 20,
        borderRadius: 18,
        marginRight: 16
    },
    name: {
        fontSize: 16,
        fontWeight: "500",
        color: "#000",
        marginTop: 4
    },
    jobposts: {
        marginTop: 16,
        fontSize: 18,
        color: "#838899",
        marginLeft: 20,
        marginBottom: 20,
    },
    image: {
        width: undefined,
        marginLeft: 10,
        height: 200,
        borderRadius: 5,
        marginVertical: 16,
    }

})