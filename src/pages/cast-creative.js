import React, { Component } from 'react'
import Layout from 'components/Layout'
// import { Link } from 'gatsby'
import {graphql, StaticQuery } from 'gatsby'
import classnames from 'classnames';
import {
    Container,
    TabContent,
    TabPane,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import CustomCollapse from 'components/CustomCollapse'

const headData = {
    title: 'White Christmas | Cast & Creative',
    description: 'The official cast and creative page for Irving Berlin’s WHITE CHRISTMAS The Musical at the Dominion Theatre. Starring Danny Mac and Dan Burton, directed by Curve, Leicester’s artistic director Nikolai Foster, choreographed by Stephen Mear.',
};

class CastCollapse extends Component {

    constructor(props) {
        super(props)
        this.state = {
            activeTab: '1',
        }
        this.toggle = this.toggle.bind(this);
    }

    toggle(tab, e) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    render() {

        return (
            <Layout
                headData={headData}
                navGlobal={true}
            >
                <section className="page CastCreativePage bg--black">
                    <div className="CastAndCreativePage--content">
                        <Container fluid={true}>
                            <Container>
                                <Nav tabs className="c-collapse-nav pt-5 pb-4">
                                    
                                    {/* <NavItem>
                                        <NavLink
                                            className={classnames({ active: this.state.activeTab === '1' })}
                                            onClick={(e) => {
                                                this.toggle('1', e);
                                            }}
                                        >
                                            CAST
                                        </NavLink>
                                    </NavItem> */}
                                    <NavItem>
                                        <NavLink
                                            className={classnames({ active: this.state.activeTab === '1' })}
                                            onClick={(e) => {
                                                this.toggle('1', e);
                                            }}
                                        >
                                            CREATIVE
                                        </NavLink>
                                    </NavItem>
                                    <div className={`c-collapse-nav nav--scale-bg ${this.state.activeTab === '1' ? 'active' : ''}`}></div>
                                    <div className={`c-collapse-nav nav--bg ${this.state.activeTab === '2' ? 'active' : ''}`}></div>
                                </Nav>
                                <TabContent activeTab={this.state.activeTab}>
                                    <CastItems
                                        clickHandler={this.clickHandler}
                                        activeId={this.state.activeId}
                                        contentHeight={this.state.contentHeight}
                                    />
                                </TabContent>
                            </Container>
                        </Container>
                    </div>
                </section>
            </Layout>
        )
    }
}

export default CastCollapse

const CastItems = (props) => (
    // Query all sites
    <StaticQuery
        query={graphql`
                query {
                    allCastJson {
                        edges {
                            node {
                                id
                                name
                                role
                                bio
                                image {
                                    childImageSharp {
                                        fluid(maxWidth: 283) {
                                            ...GatsbyImageSharpFluid
                                        }
                                    }
                                }
                            }
                        }
                    }
                allCreativeJson {
                    edges {
                        node {
                            id
                            name
                            role
                            bio
                        }
                    }
                }
            }`}
        render={data => (
            <>
                {/* <TabPane tabId="1" key={`cast`}>
                    <CustomCollapse data={data.allCastJson.edges} type="cast" />
                </TabPane> */}
                <TabPane tabId="1" key={`creative`}>
                    <CustomCollapse data={data.allCreativeJson.edges} type="creative" title="Creative" />
                </TabPane>

            </>
        )}
    />
)