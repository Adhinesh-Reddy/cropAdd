import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

type ShadowButtonProps = {
  titleId: string;
  linkPath: string;
  buttonStyle?: React.CSSProperties;
  linkStyle?: React.CSSProperties;
  textStyle?: React.CSSProperties;
};

function ShadowButton({ titleId, linkPath, buttonStyle = {}, linkStyle = {}, textStyle = {} }: ShadowButtonProps) {
  return (
    <div className='text-center mx-2 inline'>
      <Button
        className='btn btn-sm btn-outline-success shadow  rounded px-4'
        style={{
          backgroundColor: 'white', //'#4FB872',
          borderStyle: 'solid',
          ...buttonStyle
        }}
      >
        <Link to={linkPath} style={{ color: '#4FB872', ...linkStyle }}>
          <strong style={{ color: 'green', ...textStyle }}>
            <h3>
              <FormattedMessage id={titleId} />
            </h3>
          </strong>
        </Link>
      </Button>
    </div>
  );
}

export default React.memo(ShadowButton);