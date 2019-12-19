import mainStyle from '../styles/main.scss';
import scopedStyle from '../styles/scoped.scss';

function HelloWorld() {
  return (
    <div>
      Hello world
      <p>scoped!</p>
      <style jsx>{scopedStyle}</style>
      <style global jsx>
        {mainStyle}
      </style>
    </div>
  );
}

export default HelloWorld;
