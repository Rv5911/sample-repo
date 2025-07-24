import Image from 'next/image';
import React from 'react';

interface Feature {
  title: string;
  description: string;
  image: string;
  extraInfo?: string;
  highlights?: string[];
}

interface FeatureSectionProps {
  features: Feature[];
  endImage?: string;
  theme?: string;
  endImageAlign?: 'left' | 'right';
}

const FeatureSection: React.FC<FeatureSectionProps> = ({
  features,
  theme,
}) => {
  return (
    <section className="feature-section max-[900px]:px-6 px-40">
      {features.map((feature, idx) => (
        <div
          key={feature.title}
          className={`feature-row ${idx % 2 === 0 ? 'row-normal' : 'row-reverse'}`}
          style={{
            alignItems: 'center',
            minHeight: '340px',
            marginBottom: '4rem',
          }}
        >
          <div
            className="feature-image"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              minWidth: 0,
            }}
          >
            <Image
              unoptimized
              width={100}
              height={100}
              src={feature.image}
              alt={feature.title}
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '1.5rem',
                boxShadow: '0 4px 32px rgba(0,0,0,0.10)',
                objectFit: 'cover',
                maxHeight: '420px',
              }}
            />
          </div>
          <div
            className="feature-info"
            style={{ padding: '2rem 2rem', flex: 1 }}
          >
            <h3 style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>
              {feature.title}
            </h3>
            <p
              style={{
                fontSize: '1.2rem',
                color: theme === 'dark' ? '#fff' : '#444',
                marginBottom: '1.2rem',
              }}
            >
              {feature.description}
            </p>
            {feature.highlights && feature.highlights.length > 0 && (
              <ul
                style={{
                  fontSize: '1.1rem',
                  color: theme === 'dark' ? '#fff' : '#444',
                  marginBottom: '1.2rem',
                  paddingLeft: '1.2rem',
                  listStyle: 'disc',
                }}
              >
                {feature.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            )}
            {feature.extraInfo && (
              <div className="feature-extra-info">{feature.extraInfo}</div>
            )}
          </div>
        </div>
      ))}
    </section>
  );
};

export default FeatureSection;
