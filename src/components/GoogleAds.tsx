import React, { Component } from 'react'

declare global {
  interface Window {
    adsbygoogle?: any
  }
}

interface GoogleAdsProps {
  slot: any
}

class GoogleAds extends Component<GoogleAdsProps> {
  componentDidMount() {
    ;(window.adsbygoogle = window.adsbygoogle || []).push({})
  }

  render() {
    const { slot } = this.props
    return (
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-7249332970377205"
        data-ad-slot={slot}
        data-ad-format="auto"
        data-adtest="on"
        data-full-width-responsive="true"
      />
    )
  }
}

export default GoogleAds
