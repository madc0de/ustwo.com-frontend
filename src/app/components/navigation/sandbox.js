import Navigation from './';
import renderVariations from 'app/lib/sandbox/render-variations';

const pages = [{
  id: 1,
  slug: 'home',
  colour: 'red',
  ga: 'home',
  title: 'Home'
}, {
  id: 2,
  slug: 'what-we-do',
  colour: 'blue',
  ga: 'what_we_do',
  title: 'What we do'
}, {
  id: 3,
  slug: 'join-us',
  colour: 'green',
  ga: 'join_us',
  title: 'Join us'
}];

const Sandbox = React.createClass({
  render() {
    return <div className="sandbox">
      <style>{`
        body {
          background: #ccc;
        }
      `}</style>
      <div style={{position: 'relative', height: 68}}>
        <Navigation
          section="what-we-do"
          page="what-we-do"
          pages={pages}
          customClass="test-class"
        />
      </div>
    </div>;
  }
});

export default Sandbox;
