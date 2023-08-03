import {
  Text,
  RichText,
  Field,
  LinkField,
  Link,
  ImageField,
  Image,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Headline: Field<string>;
  Text: Field<string>;
  Link: LinkField;
  Image: ImageField;
}

type CTAProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const CTA = (props: CTAProps): JSX.Element => (
  <div className={`component cta ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">CTA Default view</span>
    </div>
  </div>
);

export const Default = (props: CTAProps): JSX.Element => {
  if (props.fields) {
    return (
      <div className={`component cta ${props.params.styles}`}>
        <div className="row justify-content-start">
          <div className="col-12 col-lg-5">
            <div className="bg-white text-dark p-5">
              <h3 className="pb-4">
                <Text field={props.fields.Headline} />
              </h3>
              <div className="pb-3 fs-5">
                <RichText field={props.fields.Text} />
              </div>
              <div className="text-dark fs-5 fw-bold link-wrapper">
                <Link className="link-arrow" field={props.fields.Link}></Link>
                <i className="bi bi-arrow-right red-color"></i>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <Image media={props.fields.Image} className="img-fluid ctaImage"></Image>
          </div>
        </div>
      </div>
    );
  }
  return <CTA {...props} />;
};
