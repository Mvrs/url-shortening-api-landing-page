// @ts-ignore: corresponding type declarations.ts(2307)
import brand_logo from '../../images/icon-brand-recognition.svg'
// @ts-ignore: corresponding type declarations.ts(2307)
import detailed_logo from '../../images/icon-detailed-records.svg'
// @ts-ignore: corresponding type declarations.ts(2307)
import fully_logo from '../../images/icon-fully-customizable.svg'
// @ts-ignore: corresponding type declarations.ts(2307)
import rectangle from '../../images/Rectangle.svg'

function Branding() {
	return (
		<>
			<section className="branding">
				<div className="branding__container">
					<div className="branding__container-info">
						<h1 className="branding__title">Advanced Statistics</h1>
						<p className="branding__description">
							Track how your links are performing across the web with
							<br /> our advanced statistics dashboard
						</p>
					</div>
					<div className="branding__container-features">
						<img className="rectangle" src={rectangle} alt="rectangle" />
						<div className="branding__feature_card-1" aria-label="card-1">
							<div className="u-card">
								<img
									className="branding__logo"
									src={brand_logo}
									alt="brand-recognition"
								/>
								<h1 className="branding__feature-title">Brand Recognition</h1>
								<p className="branding__feature-description">
									Boost your brand recognition with each click. Generic links
									don’t mean a thing. Branded links help instil confidence in
									your content.
								</p>
							</div>
						</div>
						<div className="branding__feature_card-2" aria-label="card-2">
							<div className="u-card">
								<img
									className="branding__logo"
									src={detailed_logo}
									alt="detailed-logo"
								/>
								<h1 className="branding__feature-title">Detailed Records</h1>
								<p className="branding__feature-description">
									Gain insights into who is clicking your links. Knowing when
									and where people engage with your content helps inform better
									decisions.
								</p>
							</div>
						</div>
						<div className="branding__feature_card-3" aria-label="card-3">
							<div className="u-card">
								<img
									className="branding__logo"
									src={fully_logo}
									alt="fully-customizable"
								/>
								<h1 className="branding__feature-title">Fully Customizable</h1>
								<p className="branding__feature-description">
									Improve brand awareness and content discoverability through
									customizable links, supercharging audience engagement.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Branding
