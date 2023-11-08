(() => 
{
    console.warn( 'TODO: Minify and remove console warnings' );
  
    // TODO: Edit with your element ID
    var target = document.getElementById( 'component-mount-node' );

    if( ! target )
    {
        console.warn( 'Unable to find target node for component mount' );
        return ;
    }

    // TODO: Edit with your particular component name
    var Component = window.ExampleComponent; 
    var React = window.React;
    var ReactDOM = window.ReactDOM;
    
    if( ! React || ! ReactDOM || ! Component )
    {
        console.error( 'React, ReactDOM or Component unavailable' );
        return ;
    }

    try 
    {   
        // pass state props and callbacks
        var counter = 0;
        var tag = null;

        var props = {
            // remount on setter
            get value() 
            { 
                return counter; 
            },
            set value( next ) 
            { 
                counter = next;
                remount()
            },
            callback: function ( nextValue ) 
            { 
                props.value = nextValue;
            }
        };

        function remount( )
        {
            // cleanup
            if( tag !== null ) 
            {
                ReactDOM.unmountComponentAtNode( target );
                tag = null;
            }

            var root = ReactDOM.createRoot( target );

            tag = React.createElement( Component, props );
            root.render( tag );
        }

        remount();
    }
    catch( e )
    {
        console.error( e );
    }
})();