import React, { FC } from 'react';
import Link from 'next/link';

interface AccountCreateAreaProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

const AccountCreateArea: FC<AccountCreateAreaProps> = ({ title, description, buttonText, buttonLink }) => {
  return (
    <div className="account-create-area">
      <div className="container account-create-content">
        <div className="row align-items-center">
          <div className="col-lg-8">
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
          <div className="col-lg-4">
            <div className="create-account">
              <Link href={buttonLink}>
                <a className="btn btn-primary">{buttonText}</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountCreateArea;
