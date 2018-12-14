import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery';

export class Inner extends Component{
    render(){
        return (
                    <div className="layout-inner">
                        <Container />
                    </div>
                );
    };
}

export class Container extends Component{
    render(){
        return (<div className="layout-container">
                    <SideNav/>
                    <div className="layout-content">
                         {/* <!-- Page content --> */}
                         <div className="container-fluid flex-grow-1 container-p-y">
                            <h4 className="font-weight-bold py-3 mb-4">Transcript Title</h4>

                            {/* <!-- Transcript Content --> */}
                            <div className="col-md-12 transcript-body original">
                                <div id="editor">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
                                unknown printer took a galley of type and scrambled it to make a type specimen book. It has 
                                survived not only five centuries, but also the leap into electronic typesetting, remaining 
                                essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
                                Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including
                                 versions of Lorem Ipsum.

                                Why do we use it?
                                It is a long established fact that a reader will be distracted by the readable content of a page when 
                                looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of 
                                letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop 
                                publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 
                                'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years,
                                 sometimes by accident, sometimes on purpose (injected humour and the like).
                                </div>
                            </div>
                            {/* <!-- / Transcript Content --> */}
                            
                        </div>
                         {/* <!-- / Page content --> */}
                         {/* <!-- Layout footer --> */}
                        <Footer />
                        {/* <!-- / Layout footer --> */}
                    </div>
                </div> )
    };
}

export class SideNav extends Component{
    render(){
        return (<div id="layout-sidenav" className="layout-sidenav sidenav sidenav-vertical bg-white">
                    <ul className="sidenav-inner py-1">
                        <SidenavLink icon="fas fa-user" panelName="userPanel"/>
                        <SidenavLink icon="fab fa-whmcs" panelName="settingsPanel"/>
                        <SidenavLink icon="fas fa-cloud-download-alt" panelName="downloadPanel"/>
                        <SidenavLink icon="fas fa-film" panelName="videosPanel"/>
                        <SidenavLink icon="fas fa-pencil-alt" panelName="requirementsPanel"/>
                        <SidenavLink icon="far fa-comment" panelName="commentsPanel"/>
                        <SidenavLink icon="fas fa-tag" panelName="keywordsPanel"/>
                    </ul>
                </div>)
    };
}

export class SidenavLink extends Component{
    clickHadler = () => {
        this.showPanel(this.props.panelName);
    }

    showPanel(panelName){
        const panelId = '#' + panelName;
        //when clicked close if opened, open otherwise
        if ($(panelId).hasClass('reveal')) {
            this.OriginalTransciptBody();
            $(panelId).removeClass('reveal');
            
        } else {
            this.ResizeTransciptBody();
            $(panelId).addClass('reveal');
        }

      //close any other open panel
      $( "[id*=Panel][id!="+panelName+"]").removeClass('reveal');
    }

    ResizeTransciptBody(){
        $(".transcript-body").removeClass("original");
        $(".transcript-body").addClass("resized");
    }
      
    OriginalTransciptBody(){
        $(".transcript-body").removeClass("resized");
        $(".transcript-body").addClass("original");
    }

    render(){
        const classes = "fa-2x " + this.props.icon; 
        return(<li className="sidenav-item">
                    <a href="#" className="sidenav-link" onClick={this.clickHadler}>
                        <i className={classes} ></i>
                    </a>
                </li>);
    };
}

class Panel extends Component{
    render(){
        return(<div className="navbar-side" id={this.props.id}>
                {this.props.id}
            </div>);
    }
}

export class PanelSection extends Component{
    render(){
        return(<div>
                    <Panel id="userPanel" />
                    <Panel id="settingsPanel" />
                    <Panel id="downloadPanel" />
                    <Panel id="videosPanel" />
                    <Panel id="requirementsPanel" />
                    <Panel id="commentsPanel" />
                    <Panel id="keywordsPanel" />
               </div>);
    }
}
export class Footer extends Component{
    render(){
        return (<nav className="layout-footer footer bg-footer-theme">
                    <div className="container-fluid container-p-x pb-3">
                        <a href="#" className="footer-link pt-3">Link 1</a>
                        <a href="#" className="footer-link pt-3 ml-4">Link 2</a>
                    </div>
                </nav>);
    };
}

//export default Test;