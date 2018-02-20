<TouchableOpacity onPress={() => this.props.navigation.navigate('AddCard',{deck:this.props.deck,
refresh:()=>this.refresh()})}>
    <Text>Add Card</Text></TouchableOpacity>
<TouchableOpacity onPress={() => this.props.navigation.navigate('Quiz',{deck:this.props.deck})}>
    <Text>Start Quiz</Text></TouchableOpacity>

    <TouchableOpacity onPress={() => { this._onPressButton("yes")}}>
       <Text>Correct</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => { this._onPressButton("no")}}>
       <Text>Incorrect</Text>
    </TouchableOpacity>
