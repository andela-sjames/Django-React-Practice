var bands = [
    {name: "Bayside", image: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Andela_Lionel_Malaga_FC.jpg"}
];

var url = '/band/api/1/';

var BandComponent = React.createClass({

    getInitialState: function() {
        return {customText: "Don't click me or else",
                data: []};
    },

    loadBandFromServer: function(){
        console.log('did we get here');
        var that = this;
        $.ajax({
            url: this.props.url,
            datatype: 'json',
            cache: false,
            success: function(data) {
                that.setState({data: data});
            }.bind(this)
        }) },

    customClickFunction: function() {
        //alert("you clicked the button");
        this.setState({customText: "Why did you click the button."});
    },

    // componentDidMount: function() {
    //     this.loadBandFromServer();
    //     // setInterval(this.loadBandFromServer,
    //     //             this.props.pollInterval)
    // },

    render: function () {
        var testStyle = { fontSize: '15px', marginRight: '20px'};
        return (
            <div style = {testStyle}>
                <h1>{this.state.customText}</h1>
                <button onClick={this.loadBandFromServer}> Click here Now</button>
                <button onClick = {this.customClickFunction}>Click Me!! </button>

                <Band value={this.state.data}/>
            </div>
        )
    }
});

var Band = React.createClass({
    render: function() {

        return (
            <div>
                <h1>{this.props.value.name}</h1>
                <img src ={this.props.value.image}/>
                <p>{this.props.value.bio}</p>
            </div>
        )
    }
});

React.render(<BandComponent bands={bands} url={url} pollInterval={1000}/>, document.getElementById('content'))
