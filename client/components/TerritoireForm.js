"use strict";

var React = require('react');

/*

interface TerritoireFormProps{
    query: MyWIQuery
}


interface MyWITerritoire{
    id: MyWITerritoireId
    name: string
    description: string 
    queries: MyWIQuery[]
}

*/

module.exports = React.createClass({
    getInitialState: function(){
        return {};
    },
    
    render: function(){
        var props = this.props;
        var state = this.state;
        var self = this;
        
        var territoire = props.territoire || {};
        
        return React.DOM.form({
            className: "table-layout",
            onSubmit: function(e){
                e.preventDefault();
                
                var formElement = e.target;
                
                var formData = Object.create(null);
                formData.name = formElement.querySelector('input[name="name"]').value;
                formData.description = formElement.querySelector('textarea[name="description"]').value;
                
                console.log('formData', formData);
                
                props.onSubmit(formData);
            }
        }, [
            React.DOM.label({}, [
                React.DOM.span({}, 'Name'),
                React.DOM.input({
                    name: 'name',
                    type: 'text',
                    defaultValue: territoire.name
                })
            ]),
            React.DOM.label({}, [
                React.DOM.span({}, 'Description'),
                React.DOM.textarea({
                    name: 'description',
                    cols: "50",
                    rows: "5",
                    defaultValue: territoire.description
                })
            ]),
            React.DOM.button({
                type: "submit"
            }, "ok")
        ]);
    }
});