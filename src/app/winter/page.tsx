export default function WinterPage() {
    return (
        <div className="season-page" style={{ padding: '20px', margin: '0 auto', maxWidth: '800px' }}>
            <h1 style={{ textAlign: 'center', color: '#32CD32' }}>Winter Season</h1>
            <p style={{ textAlign: 'justify', lineHeight: '1.6' }}>
            Winter is a magical season that blankets the world in a serene layer of snow, transforming the landscape into a picturesque wonderland. The air turns crisp and cold, invigorating the senses and inviting cozy gatherings by the fireplace. As trees stand adorned with frost, and icicles form like delicate chandeliers, nature takes on a quiet beauty. The days shorten, and twilight falls earlier, casting a soft glow that enhances the charm of holiday lights and festive decorations. Winter beckons us to embrace indoor comforts, whether it’s curling up with a good book, sipping hot cocoa, or engaging in family activities like building snowmen or ice skating. Despite its chill, winter has a warmth of its own, found in the joy of togetherness and the peacefulness of a snow-covered world.

            </p>
            <img
                src="/winter.jpeg"
                alt="winter"
                className="season-image"
                style={{ width: '100%', maxWidth: '600px', display: 'block', margin: '20px auto' }}
            />
        </div>
    );
}
