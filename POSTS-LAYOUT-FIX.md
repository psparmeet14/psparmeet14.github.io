# Posts Page Layout Fix

## Issue
On the Posts page, the LinkedIn icon and post title were appearing on different lines instead of staying together on the same line.

## Root Cause
The flex container layout needed:
1. Explicit `flex-shrink: 0` on the icon to prevent it from shrinking
2. CSS rules to ensure the flex layout doesn't wrap
3. Proper minimum width constraints

## Solution

### 1. Component Fix (`src/pages/Posts.jsx`)
Added `flexShrink: 0` inline style to the LinkedIn icon:

```jsx
<i className="fab fa-linkedin fa-2x me-3" 
   style={{ color: '#0077b5', flexShrink: 0 }}>
</i>
```

### 2. CSS Enhancement (`src/assets/style.css`)
Added specific styles for the Posts page card layout:

```css
/* ===== Posts Page Specific Styles ===== */
.card-body .d-flex {
    display: flex;
    align-items: flex-start;
    flex-wrap: nowrap;
}

.card-body .d-flex > i.fa-linkedin {
    flex-shrink: 0;
    min-width: 48px;
    line-height: 1;
}

.card-body .flex-grow-1 {
    flex: 1 1 auto;
    min-width: 0;
}

.card-title {
    word-wrap: break-word;
    overflow-wrap: break-word;
}
```

## Key Changes

### Component Level
- **flexShrink: 0**: Prevents the icon from shrinking when space is limited
- Maintains `me-3` margin for proper spacing

### CSS Level
- **flex-wrap: nowrap**: Ensures content doesn't wrap to new lines
- **min-width: 48px**: Reserves minimum space for the icon (2x size + margins)
- **line-height: 1**: Ensures consistent vertical alignment
- **flex: 1 1 auto**: Allows the title container to grow/shrink appropriately
- **word-wrap/overflow-wrap**: Handles long titles gracefully by breaking words

## Result
✅ LinkedIn icon and post title now stay on the same line  
✅ Layout remains responsive  
✅ Long titles wrap properly within their container  
✅ Icon maintains consistent spacing  

## Testing
- ✅ Build: Successful (571ms)
- ✅ Lint: No errors
- ✅ Visual: Icon and title aligned on same line

## Files Modified
1. `/src/pages/Posts.jsx` - Added flexShrink inline style
2. `/src/assets/style.css` - Added Posts page specific flex layout rules
