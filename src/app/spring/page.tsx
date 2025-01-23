export default function SpringPage() {
    return (
        <div className="season-page" style={{ padding: '20px', margin: '0 auto', maxWidth: '800px' }}>
            <h1 style={{ textAlign: 'center', color: '#32CD32' }}>Spring Season</h1>
            <p style={{ textAlign: 'justify', lineHeight: '1.6', fontSize: '1rem' }}>
            Spring is a delightful season that marks the renewal of life and the awakening of nature after the quiet chill of winter. As temperatures begin to rise, buds burst open on trees and flowers bloom in a riot of color, filling gardens and landscapes with vibrant hues. The air is filled with the sweet scent of blossoms, and the cheerful songs of birds returning from their migrations create a joyful symphony. Spring invites outdoor activities, as people shake off the winter blues and embrace longer days filled with sunshine. It's a time for planting, gardening, and enjoying picnics in the park, as children run freely in the warmth of the sun. The season also symbolizes hope and new beginnings, inspiring individuals to set fresh goals and embark on new adventures. With nature in full bloom and the world coming alive, spring is a beautiful reminder of growth, renewal, and the endless possibilities that lie ahead.
            </p>
            <img
                src="/spring.jpeg"
                alt="spring"
                className="season-image"
                style={{ width: '100%', maxWidth: '600px', display: 'block', margin: '20px auto' }}
            />
        </div>
    );
}
