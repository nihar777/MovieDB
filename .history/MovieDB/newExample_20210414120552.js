import React, { Component } from 'react';
import { View, Text,Animated } from 'react-native';


export default class newExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
         <Animated.View style={{ width: screenWidth }}>
                <Animated.View style={{ flexDirection: "row", marginLeft: this.mainMoviePosition }}>
                    <MovieDetails mainMovieHeight={this.mainMovieHeight} data={this.state.currentMovie} />
                    <MainMovie height={this.mainMovieHeight} data={this.state.currentMovie} changeMainMoviePosition={this.changeMainMoviePosition} />
                    <Animated.View
                        style={{
                            width: screenWidth,
                            height: this.mainMovieHeight,
                            backgroundColor: 'black'
                        }}
                    >
                        <YouTubePlayer play={this.state.playVideo} movieData={this.state.currentMovie} changeMainMoviePosition={this.changeMainMoviePosition} />
                    </Animated.View>
                </Animated.View>
                <SearchContainer height={this.SearchContainerHeight} changeFunction={this.changeState} />
                <CategoriesContainer height={this.mainMovieHeight} changeFunction={this.changeState} />
            </Animated.View>
      </View>
    );
  }
}
