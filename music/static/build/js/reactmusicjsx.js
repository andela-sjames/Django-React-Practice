var bands = [{ name: "Bayside", image: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Andela_Lionel_Malaga_FC.jpg" }];

var url = '/band/api/1/';

var BandComponent = React.createClass({
    displayName: "BandComponent",


    getInitialState: function () {
        return { customText: "Don't click me or else",
            data: [] };
    },

    loadBandFromServer: function () {
        console.log('did we get here');
        var that = this;
        $.ajax({
            url: this.props.url,
            datatype: 'json',
            cache: false,
            success: function (data) {
                that.setState({ data: data });
            }.bind(this)
        });
    },

    customClickFunction: function () {
        //alert("you clicked the button");
        this.setState({ customText: "Why did you click the button." });
    },

    // componentDidMount: function() {
    //     this.loadBandFromServer();
    //     // setInterval(this.loadBandFromServer,
    //     //             this.props.pollInterval)
    // },

    render: function () {
        var testStyle = { fontSize: '15px', marginRight: '20px' };
        return React.createElement(
            "div",
            { style: testStyle },
            React.createElement(
                "h1",
                null,
                this.state.customText
            ),
            React.createElement(
                "button",
                { onClick: this.loadBandFromServer },
                " Click here Now"
            ),
            React.createElement(
                "button",
                { onClick: this.customClickFunction },
                "Click Me!! "
            ),
            React.createElement(Band, { value: this.state.data })
        );
    }
});

var Band = React.createClass({
    displayName: "Band",

    render: function () {

        return React.createElement(
            "div",
            null,
            React.createElement(
                "h1",
                null,
                this.props.value.name
            ),
            React.createElement("img", { src: this.props.value.image }),
            React.createElement(
                "p",
                null,
                this.props.value.bio
            )
        );
    }
});

React.render(React.createElement(BandComponent, { bands: bands, url: url, pollInterval: 1000 }), document.getElementById('content'));