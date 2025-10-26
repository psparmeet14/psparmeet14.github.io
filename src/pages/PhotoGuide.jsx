import Navbar from '../components/Navbar'
import { usePageMetadata } from '../hooks/usePageMetadata'

const styles = {
  bodyWrapper: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem 1rem 4rem',
  },
  container: {
    background: '#ffffff',
    padding: '2rem',
    borderRadius: '15px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
    textAlign: 'center',
    maxWidth: '600px',
    width: '100%',
  },
  instructions: {
    textAlign: 'left',
    background: '#ecf0f1',
    padding: '1.5rem',
    borderRadius: '10px',
    margin: '1.5rem 0',
  },
  profilePlaceholder: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #3498db, #e74c3c)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '4rem',
    color: '#ffffff',
    margin: '2rem auto',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)',
  },
  note: {
    background: '#fff3cd',
    borderLeft: '4px solid #ffc107',
    padding: '1rem',
    margin: '1rem 0',
    textAlign: 'left',
  },
  infoNote: {
    background: '#d1ecf1',
    borderLeft: '4px solid #17a2b8',
    padding: '1rem',
    margin: '1rem 0',
    textAlign: 'left',
  },
}

const PhotoGuide = () => {
  usePageMetadata('Profile Photo Setup | Parmeet Singh Bhogal', 'Guide to adding a profile photo placeholder for the portfolio website.')

  return (
    <div style={{ background: '#f0f0f0', minHeight: '100vh' }}>
      <Navbar />
      <div style={styles.bodyWrapper}>
        <div style={styles.container}>
          <h1>📸 Profile Photo Setup</h1>
          <p>This is a guide to help you add your professional photo to your portfolio website.</p>

          <div style={styles.profilePlaceholder}>PS</div>

          <div style={styles.instructions}>
            <h3>Steps to Add Your Photo:</h3>
            <ol>
              <li>
                <strong>Take or choose a professional photo</strong>
                <ul>
                  <li>Clear, well-lit headshot</li>
                  <li>Professional attire</li>
                  <li>Neutral or clean background</li>
                  <li>Square aspect ratio (1:1)</li>
                </ul>
              </li>
              <li>
                <strong>Optimize your photo</strong>
                <ul>
                  <li>Resize to 300x300 or 500x500 pixels</li>
                  <li>Save as JPG or PNG</li>
                  <li>Keep file size under 500KB</li>
                  <li>
                    Name it:
                    {' '}
                    <code>profile-photo.jpg</code>
                  </li>
                </ul>
              </li>
              <li>
                <strong>Add to your website</strong>
                <ul>
                  <li>Place the file in the root directory</li>
                  <li>Or create an <code>images/</code> folder</li>
                </ul>
              </li>
              <li>
                <strong>Update components</strong>
                <ul>
                  <li>Replace placeholders in the header component with your photo</li>
                  <li>
                    Use:
                    {' '}
                    <code>{'<img src="/profile-photo.jpg" alt="Parmeet Singh Bhogal" class="profile-photo" />'}</code>
                  </li>
                </ul>
              </li>
            </ol>
          </div>

          <div style={styles.note}>
            <strong>💡 Tip:</strong>
            {' '}You can use free tools like:
            <ul style={{ margin: '0.5rem 0' }}>
              <li>
                <strong>Canva</strong>
                {' '} - Create/edit photos online
              </li>
              <li>
                <strong>Remove.bg</strong>
                {' '} - Remove background
              </li>
              <li>
                <strong>TinyPNG</strong>
                {' '} - Compress images
              </li>
              <li>
                <strong>Your smartphone</strong>
                {' '} - Portrait mode works great!
              </li>
            </ul>
          </div>

          <div style={styles.infoNote}>
            <strong>🎨 Alternative:</strong>
            {' '}Until you add your photo, the site displays a nice icon placeholder with your initials. This looks professional and maintains the design integrity.
          </div>
        </div>
      </div>
    </div>
  )
}

export default PhotoGuide
