import React ,{useEffect}from 'react';
import{

Text,
StyleSheet,
AsyncStorage,
FlatList,
TextInput,
View,
Button,
} from 'react-native';
import { TouchableOpacity,TouchableHighlight, FlatList, State } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import axios from 'react-native-axios';
import DashboardStyles from './DashboardStyle'
import styles from './DashboardStyle';

const MovieData = [
    {
        image: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
        details:'onionCapture'
    },
    {

        image: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Second Item',
        details:'onionCapture'
    },
    {
        image: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Third Item',
        details:'onionCapture'
    },
  ];

function Dashboard(){   

    

    return(
        <View style={styles.ViewStyle}> 
          <FlatList
          data={MovieData}
          renderItem={()=>{
             <View>
                  <Container> 
                      <Content>
                    <Card>
                        <CardItem>
                        <Left>
                            <Thumbnail source={{uri: 'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg'}} />
                            <Body>
                            <Text>NativeBase</Text>
                            <Text note>GeekyAnts</Text>
                            </Body>
                        </Left>
                        </CardItem>
                        <CardItem cardBody>
                        <Image source={{uri: 'https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'}} style={{height: 200, width: null, flex: 1}}/>
                        </CardItem>
                        <CardItem>
                        <Left>
                            <Button transparent>
                            <Icon active name="thumbs-up-outline" />
                            <Text>12 Likes</Text>
                            </Button>
                        </Left>
                        <Body>
                            <Button transparent>
                            <Icon active name="chatbubbles" />
                            <Text>4 Comments</Text>
                            </Button>
                        </Body>
                        <Right>
                            <Text>11h ago</Text>
                        </Right>
                        </CardItem>
                    </Card>
                    </Content>
                </Container>
             </View>
            }}>

        </FlatList>
        </View>
    )
}
export default Dashboard

