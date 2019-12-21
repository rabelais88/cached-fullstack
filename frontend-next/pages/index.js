import mainStyle from '../styles/main.postcss';
import scopedStyle from '../styles/scoped.postcss';

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
