import { Helmet } from "react-helmet";

const TitleText = ({ title, content }) => {
  return (
    <Helmet>
      <meta charSet="utf-8" name="description" content={content} />
      <title>{title}</title>
    </Helmet>
  );
};

export default TitleText;
