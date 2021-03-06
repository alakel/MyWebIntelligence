"use strict";

var React = require('react');

/*

interface QueryFormProps{
    query: MyWIQuery
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
        
        var query = props.query || {};
        
        return React.DOM.form({
            className: "table-layout",
            onSubmit: function(e){
                e.preventDefault();
                
                var formElement = e.target;
                
                var formData = Object.create(null);
                formData.name = formElement.querySelector('input[name="name"]').value.trim();
                formData.q = formElement.querySelector('input[name="q"]').value;
                formData.lang = formElement.querySelector('select[name="lang"]').value;
                formData.nbPage = Number( formElement.querySelector('input[name="nbPage"]').value );
                formData.oracle = Number( formElement.querySelector('select[name="oracle"]').value );
                
                props.onSubmit(formData);
            }
        }, [
            React.DOM.label({}, [
                React.DOM.span({}, 'name'),
                React.DOM.input({
                    name: 'name',
                    type: 'text',
                    required: true,
                    /*
                        https://github.com/facebook/react/issues/2860
                        https://bugzilla.mozilla.org/show_bug.cgi?id=1121945
                        Giving up for now
                    */
                    //pattern: '\\S+', 
                    
                    // browsers auto-complete based on @name and here it's "name" which is common
                    // so autocompletion values aren't that useful. This isn't very autocompletable anyway
                    autocomplete: 'off', 
                    defaultValue: query.name
                })
            ]),
            React.DOM.label({}, [
                React.DOM.span({}, 'query string'),
                React.DOM.input({
                    name: 'q',
                    required: true,
                    type: 'text',
                    defaultValue: query.q
                })
            ]),
            React.DOM.label({}, [
                React.DOM.span({}, 'language'),
                React.DOM.select({
                    name: 'lang',
                    defaultValue: query.lang || "none"
                }, [
                    React.DOM.option({value: "none"}, 'unimportant'),
                    React.DOM.option({value: "en"}, 'english'),
                    React.DOM.option({value: "fr"}, 'french')
                ])
            ]),
            React.DOM.label({}, [
                React.DOM.span({}, 'goal number pages'),
                React.DOM.input({
                    name: 'nbPage',
                    type: 'number',
                    min: 0,
                    step: 50,
                    defaultValue: 'nbPage' in query ? query.nbPage : 400
                })
            ]),
            React.DOM.label({}, [
                React.DOM.span({}, 'oracle'),
                React.DOM.select({
                    name: 'oracle',
                    defaultValue: query.oracle
                }, [
                    React.DOM.option({value: 1}, 'Google search'),
                    React.DOM.option({value: 2}, 'Twitter search')
                ])
            ]),
            React.DOM.button({
                type: "submit"
            }, "ok")
        ]);
    }
});