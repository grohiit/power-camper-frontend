import Layout from '@/components/Layout'

export default function faq() {
  return (
    <Layout
      title="Frequently Asked Questions About Power Camper"
      description="All of your questions about Power Camper answered!"
    >
      <div className="m-auto p-10 w-fit lg:w-2/4 border-2 bg-slate-50">
        <h1 id="frequently-asked-questions">Frequently Asked Questions</h1>
        <h2 id="do-you-sell-campsites">Do you sell campsites?</h2>
        <p>
          No, PowerCamper doesn&#39;t hold an inventory of campsites, or scalp
          reservations. We simply search for and alert you to last minute
          cancellations.
        </p>
        <h2 id="do-you-have-an-availability-for-x-campground-on-y-date">
          Do you have an availability for X campground on Y date?
        </h2>
        <p>
          You can manually check ReserveCalifornia for immediate availability.
          Powercamper is set up to look for cancellations over a range of dates,
          to find you opportunities to book at sold-out campgrounds.
        </p>
        <h2 id="how-do-i-set-up-a-scan-on-powercamper">
          How do I set up a scan on Powercamper?
        </h2>
        <p>
          We have a walkthrough guide on setting up a scan here -{' '}
          <a href="https://www.powercamper.com/faq/scan-setup">
            https://www.powercamper.com/faq/scan-setup
          </a>
        </p>
        <h2 id="why-does-the-site-have-a-monthly-subscription-i-dont-camp-every-month">
          Why does the site have a monthly subscription? I don&#39;t camp every
          month!
        </h2>
        <p>
          We have to keep the total number of people receiving these instant
          notifications low, so that you have a chance to get in there and
          reserve the site. If we sent an alert to 1000 people everytime a
          weekend reservation popped up, there would be 1 happy subscriber and
          999 unhappy ones. That is not a sustainable business model.
        </p>
        <h2 id="can-i-cancel-my-subscription-for-months-that-i-do-not-plan-to-camp">
          Can I cancel my subscription for months that I do not plan to camp?
        </h2>
        <p>
          Yes, cancel anytime, but there are no refunds. The minimum term of
          service is one month, which you pay for on inital sign up. If you wish
          to terminate the subscription simply use the &quot;unsubscribe&quot;
          link in your Edit Profile Details page here. This will prevent the
          next month&#39;s payment from being automatically deducted. Your
          service will then stop at the end of the current subscription period.
        </p>
        <h2 id="what-campgrounds-do-you-cover">
          What campgrounds do you cover?
        </h2>
        <p>
          Right now, we are focused on Southern California beach campgrounds as
          they are extremely popular and hard to get reservations at. However,
          we are looking to expand our campground database and will be expanding
          into other states soon!
        </p>
      </div>
    </Layout>
  )
}
