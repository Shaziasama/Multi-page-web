export default function SummerPage() {
    return (
        <div className="season-page" style={{ padding: '20px', margin: '0 auto', maxWidth: '800px' }}>
            <h1 style={{ textAlign: 'center', color: '#32CD32' }}>Summer Season</h1>
            <p style={{ textAlign: 'justify', lineHeight: '1.6', fontSize: '1rem' }}>
            Summer is a vibrant and lively season that brings warmth, sunshine, and an abundance of color to the world. The days stretch long and are filled with the sounds of laughter, splashing water, and the rustling of leaves in a gentle breeze. Gardens burst with blooming flowers and ripe fruits, while farmers' markets overflow with fresh produce, enticing everyone to savor the flavors of the season. It's a time of relaxation and adventure, where families and friends gather for barbecues, picnics, and beach outings, creating memories under the sun. Children relish the freedom of school break, exploring nature, playing outdoors, and enjoying various summer camps and activities. Whether it's lounging by the pool, hiking through scenic trails, or watching fireworks light up the night sky, summer invites us to embrace the joy of life and the beauty of the world around us.

            </p>
            <img
                src="/summer.jpeg"
                alt="summer"
                className="season-image"
                style={{ width: '100%', maxWidth: '600px', display: 'block', margin: '20px auto' }}
            />
        </div>
    );
}

