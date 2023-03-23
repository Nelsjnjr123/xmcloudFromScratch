import React from 'react';
import Link from 'next/link';
import {
  Field,
  ImageField,
  LinkField,
  Text,
  RichText as JssRichText,
  Link as JssLink,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Title: Field<string>;
  Description: Field<string>;
  Image: ImageField;
  TargetURL: LinkField;
}

export type HeroBannerProps = {
  params: { [key: string]: string };
  fields: Fields;
};

// Usage:

const HeroBannerDeafultComponent = (props: HeroBannerProps): JSX.Element => (
  <div className={`main-banner ${props.params.styles}`}>
    <div className={`d-table`}>
      <div className={`d-table-cell`}>
        <div className={`container`}>
          <div className={`main-banner-content`}>Hero Banner</div>
        </div>
      </div>
    </div>
  </div>
);

export const Default = (props: HeroBannerProps): JSX.Element => {
  if (props.fields) {
    const backgroundImageStyle = props.fields?.Image?.value?.src
      ? { backgroundImage: `url(${props.fields.Image.value.src})` }
      : null;

    return (
      <>
        <div className={`main-banner ${props.params.styles}`} style={backgroundImageStyle}>
          <div className={`d-table`}>
            <div className={`d-table-cell`}>
              <div className={`container`}>
                <div className={`main-banner-content`}>
                  {props.fields?.Title && (
                    <h1>
                      <Text className={`banner-text`} field={props.fields.Title} />
                    </h1>
                  )}
                  {props.fields?.Description && (
                    <div>
                      <JssRichText className={`banner-description`} field={props.fields.Description} />
                    </div>
                  )}
                  <Link href="/contact">
                    <a className="btn btn-primary">Get Started</a>
                  </Link>
                  {!props.fields?.TargetURL && (
                    <span>
                      <JssLink className={`banner-link`} field={props.fields.TargetURL || 'Get Started'} />
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return <HeroBannerDeafultComponent {...props} />;
};
