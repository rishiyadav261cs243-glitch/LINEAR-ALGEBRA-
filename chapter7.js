var C7={n:7,title:"Symmetric matrices and quadratic forms",
sec:[
["7.1 Diagonalization of symmetric matrices","Spectral Theorem",`
<p>A matrix is <b>symmetric</b> if Aᵀ = A. A is <b>orthogonally diagonalizable</b> if A = PDPᵀ for an orthogonal matrix P (so P⁻¹ = Pᵀ) and diagonal D.</p>
<p><b>Theorem 1.</b> If A is symmetric, eigenvectors from different eigenvalues are orthogonal.</p>
<details><summary>Proof</summary><p>Let Av₁ = λ₁v₁ and Av₂ = λ₂v₂ with λ₁ ≠ λ₂. Then λ₁(v₁·v₂) = (Av₁)·v₂ = v₁ᵀAᵀv₂ = v₁ᵀAv₂ = v₁·(Av₂) = λ₂(v₁·v₂). So (λ₁ − λ₂)(v₁·v₂) = 0, and since λ₁ ≠ λ₂, v₁·v₂ = 0. ∎</p></details>
<p><b>Theorem 2.</b> Every eigenvalue of a real symmetric matrix is real.</p>
<details><summary>Proof</summary><p>Let Ax = λx with x a nonzero complex vector. Then x̄ᵀAx = λ x̄ᵀx. Conjugating Ax = λx and using that A is real and symmetric gives x̄ᵀA = λ̄x̄ᵀ, so x̄ᵀAx = λ̄ x̄ᵀx. Since x̄ᵀx = Σ|xᵢ|² &gt; 0, λ = λ̄, so λ is real. ∎</p></details>
<p><b>Theorem 3 (Spectral Theorem).</b> A real n×n matrix A is orthogonally diagonalizable if and only if A is symmetric. Then A has n real eigenvalues (with multiplicity) and an orthonormal basis of eigenvectors.</p>
<details><summary>Proof</summary><p>If A = PDPᵀ then Aᵀ = (PDPᵀ)ᵀ = PDᵀPᵀ = PDPᵀ = A, so A is symmetric. Conversely, let A be symmetric and induct on n. A has an eigenvalue λ₁ (by the fundamental theorem of algebra), which is real by Theorem 2; pick a unit eigenvector u₁. If x ⊥ u₁ then (Ax)·u₁ = x·(Au₁) = λ₁(x·u₁) = 0, so A maps W = {u₁}^⊥ into itself. The restriction of A to W is symmetric of size n − 1, so by induction W has an orthonormal eigenbasis. Adding u₁ gives an orthonormal eigenbasis of ℝⁿ. ∎</p></details>
<p><b>Spectral decomposition.</b> A = λ₁u₁u₁ᵀ + … + λₙuₙuₙᵀ, a sum of rank-1 projection matrices weighted by eigenvalues.</p>
<p>Example: A = [3 1; 1 3] has eigenvalues 4 and 2 with unit eigenvectors (1, 1)/√2 and (1, −1)/√2. So A = 4·½[1 1; 1 1] + 2·½[1 −1; −1 1].</p>
<div class="note"><b>Notable points.</b> Within a repeated eigenvalue, use Gram–Schmidt to get orthonormal eigenvectors. Symmetric matrices are always diagonalizable, even with repeated eigenvalues. The matrix AᵀA is always symmetric.</div>`],
["7.2 Quadratic forms","Principal Axes, classification",`
<p>A <b>quadratic form</b> on ℝⁿ is Q(x) = xᵀAx with A symmetric. The off-diagonal entries of A are half the coefficients of the cross terms. Example: Q(x) = 3x₁² + 2x₁x₂ + 3x₂² = xᵀ[3 1; 1 3]x.</p>
<p><b>Theorem 4 (Principal Axes).</b> If A is symmetric and A = PDPᵀ with P orthogonal, the change of variable x = Py turns Q(x) = xᵀAx into yᵀDy = λ₁y₁² + … + λₙyₙ², with no cross terms.</p>
<details><summary>Proof</summary><p>xᵀAx = (Py)ᵀA(Py) = yᵀ(PᵀAP)y = yᵀDy, since PᵀAP = D. ∎</p></details>
<p>Example: Q = 3x₁² + 2x₁x₂ + 3x₂² becomes 4y₁² + 2y₂² with y = Pᵀx.</p>
<p><b>Classification.</b> Q is <b>positive definite</b> if Q(x) &gt; 0 for all x ≠ 0, <b>negative definite</b> if Q(x) &lt; 0 for all x ≠ 0, <b>indefinite</b> if it takes both signs, and <b>positive semidefinite</b> if Q(x) ≥ 0 for all x.</p>
<p><b>Theorem 5.</b> Q(x) = xᵀAx is positive definite if and only if all eigenvalues of A are positive; negative definite if and only if all are negative; indefinite if and only if A has both positive and negative eigenvalues.</p>
<details><summary>Proof</summary><p>By Theorem 4, Q(x) = Σλᵢyᵢ² with y = Pᵀx, and y ≠ 0 exactly when x ≠ 0. If every λᵢ &gt; 0 the sum is positive for y ≠ 0. If some λₖ ≤ 0, take y = eₖ to get Q ≤ 0 at a nonzero x. The other cases are the same. ∎</p></details>
<div class="note"><b>Notable points.</b> Example: x₁² + 4x₁x₂ + x₂² has A = [1 2; 2 1] with eigenvalues 3 and −1, so it is indefinite. If A is positive definite then det A &gt; 0, the diagonal entries are positive, and A⁻¹ is positive definite. AᵀA is positive semidefinite for any A, and positive definite when A has independent columns.</div>`],
["7.3 Constrained optimization","Rayleigh quotient",`
<p>For a quadratic form Q(x) = xᵀAx, consider the maximum and minimum of Q subject to ‖x‖ = 1.</p>
<p><b>Theorem 6.</b> Let A be symmetric with eigenvalues λ₁ ≥ λ₂ ≥ … ≥ λₙ. The maximum of xᵀAx over ‖x‖ = 1 is λ₁, attained at a unit eigenvector for λ₁. The minimum is λₙ, attained at a unit eigenvector for λₙ.</p>
<details><summary>Proof</summary><p>Write x = Py with P orthogonal; then ‖y‖ = ‖x‖ = 1 and xᵀAx = Σλᵢyᵢ². Since each λᵢ ≤ λ₁, Σλᵢyᵢ² ≤ λ₁Σyᵢ² = λ₁, with equality at y = e₁, that is, x = u₁. The minimum is the same argument with λₙ. ∎</p></details>
<p><b>Theorem 7.</b> Subject to also x ⊥ u₁, the maximum of xᵀAx over ‖x‖ = 1 is λ₂, attained at u₂. (Continuing, the k-th largest eigenvalue is the maximum over unit vectors orthogonal to u₁, …, uₖ₋₁.)</p>
<p>Examples: for Q = 3x₁² + 2x₁x₂ + 3x₂², max = 4 at ±(1, 1)/√2 and min = 2 at ±(1, −1)/√2. For Q = 9x₁² + 4x₂² + 3x₃², the max on the unit sphere is 9 at (±1, 0, 0), the max with x ⊥ (1, 0, 0) is 4, and the min is 3. For Q = x₁x₂, the matrix [0 ½; ½ 0] has eigenvalues ±½, so the max on the unit circle is ½.</p>
<div class="note"><b>Notable points.</b> Constraints of the form ‖x‖ = r scale the answer by r², so on ‖x‖ = 2 the extremes are 4λ₁ and 4λₙ. The quantity xᵀAx / xᵀx is the Rayleigh quotient. This is how you get tight bounds on a quadratic form without calculus.</div>`],
["7.4 The singular value decomposition","SVD, rank, pseudoinverse",`
<p>For any m×n matrix A, the matrix AᵀA is symmetric. Its eigenvalues are nonnegative, since if AᵀAv = λv with ‖v‖ = 1 then λ = vᵀAᵀAv = ‖Av‖² ≥ 0. Order them λ₁ ≥ … ≥ λₙ ≥ 0. The <b>singular values</b> of A are σᵢ = √λᵢ = ‖Avᵢ‖, where v₁, …, vₙ are orthonormal eigenvectors of AᵀA.</p>
<p><b>Theorem 8 (SVD).</b> Let A be m×n with r nonzero singular values. Then A = UΣVᵀ, where U (m×m) and V (n×n) are orthogonal and Σ is m×n with σ₁ ≥ … ≥ σᵣ on its diagonal and zeros elsewhere. Moreover rank A = r.</p>
<details><summary>Proof</summary><p>Take v₁, …, vₙ as above. For i ≤ r, put uᵢ = Avᵢ/σᵢ. These are orthonormal: uᵢ·uⱼ = (vᵢᵀAᵀAvⱼ)/(σᵢσⱼ) = λⱼ(vᵢ·vⱼ)/(σᵢσⱼ), which is 0 for i ≠ j and 1 for i = j. Extend u₁, …, uᵣ to an orthonormal basis of ℝᵐ. For i &gt; r, ‖Avᵢ‖ = σᵢ = 0, so Avᵢ = 0. Hence AV = [σ₁u₁ … σᵣuᵣ 0 … 0] = UΣ, and so A = UΣVᵀ. Since {Av₁, …, Avᵣ} is an orthogonal basis of Col A, rank A = r. ∎</p></details>
<p>Example: A = [3 0; 0 −2] has singular values 3 and 2, V = I, U = [1 0; 0 −1]. For A = [1 −1; −2 2; 2 −2], AᵀA = [9 −9; −9 9] has eigenvalues 18 and 0, so σ₁ = 3√2, v₁ = (1, −1)/√2 and u₁ = (1, −2, 2)/3.</p>
<p><b>Pseudoinverse.</b> A⁺ = VΣ⁺Uᵀ, where Σ⁺ inverts the nonzero σᵢ and transposes the shape. Then x̂ = A⁺b is the least-squares solution of Ax = b with the smallest norm.</p>
<div class="note"><b>Notable points.</b> The singular values of A are the square roots of the eigenvalues of AᵀA (and of AAᵀ). The columns of U are in Col A (for i ≤ r) and the last columns of V span Nul A. If A is symmetric positive definite, the SVD is the same as the orthogonal diagonalization.</div>`],
["7.5 Applications of the SVD and statistics","Conditioning, low-rank approximation, PCA",`
<p><b>Condition number.</b> For invertible A, κ(A) = σ₁/σₙ. A large κ means the solution of Ax = b is very sensitive to small errors in b. For A = diag(2, 0.01), κ = 200.</p>
<p><b>Low-rank approximation.</b> Writing A = σ₁u₁v₁ᵀ + … + σᵣuᵣvᵣᵀ, the best rank-k approximation to A (in the Frobenius norm) keeps the first k terms (Eckart–Young theorem, stated without proof). The error is √(σₖ₊₁² + … + σᵣ²). Also ‖A‖<sub>F</sub>² = σ₁² + … + σᵣ² and max ‖Ax‖/‖x‖ = σ₁.</p>
<p><b>Principal component analysis (PCA).</b> Given N observation vectors X₁, …, X<sub>N</sub>, subtract the mean to get the centered matrix B = [X̂₁ … X̂<sub>N</sub>]. The <b>covariance matrix</b> is S = BBᵀ/(N − 1). It is symmetric positive semidefinite, and its diagonal entries are the variances. The <b>total variance</b> is tr S, which equals the sum of the eigenvalues.</p>
<p>The <b>principal components</b> are orthonormal eigenvectors u₁, …, uₙ of S, ordered by eigenvalue λ₁ ≥ … ≥ λₙ. The variance of the data along a unit vector u is uᵀSu, so by Theorem 6 it is largest along u₁, with value λ₁. The fraction of total variance explained by uᵢ is λᵢ/tr S.</p>
<p>Example: observations (1, 2), (3, 0), (5, −2) have mean (3, 0) and centered data (−2, 2), (0, 0), (2, −2). Then S = ½·[8 −8; −8 8] = [4 −4; −4 4], with eigenvalues 8 and 0. The first principal component (1, −1)/√2 explains 100% of the variance, because all the points lie on a line.</p>
<div class="note"><b>Notable points.</b> PCA via the SVD: the principal components are the left singular vectors of B, and the variances are σᵢ²/(N − 1). Always center the data first. PCA is used to reduce dimension by keeping only the first few components.</div>`]],
pr:[
["Orthogonally diagonalize A = [3 1; 1 3].","λ² − 6λ + 8 = (λ − 4)(λ − 2). For 4: (1, 1)/√2. For 2: (1, −1)/√2. P = (1/√2)[1 1; 1 −1], D = diag(4, 2), A = PDPᵀ."],
["Write A = [3 1; 1 3] as a spectral decomposition.","A = 4u₁u₁ᵀ + 2u₂u₂ᵀ with u₁u₁ᵀ = ½[1 1; 1 1] and u₂u₂ᵀ = ½[1 −1; −1 1]. Check: 2[1 1; 1 1] + [1 −1; −1 1] = [3 1; 1 3]."],
["Remove the cross term of Q(x) = 3x₁² + 2x₁x₂ + 3x₂² and find its extremes on ‖x‖ = 1.","With y = Pᵀx, Q = 4y₁² + 2y₂². It is positive definite. On the unit circle the max is 4 at ±(1, 1)/√2 and the min is 2 at ±(1, −1)/√2."],
["Classify Q(x) = x₁² + 4x₁x₂ + x₂².","A = [1 2; 2 1] has eigenvalues 3 and −1, one positive and one negative, so Q is indefinite. For example Q(1, 0) = 1 &gt; 0 and Q(1, −1) = −2 &lt; 0."],
["Find the SVD of A = [3 0; 0 −2].","AᵀA = diag(9, 4), so σ = 3, 2 and V = I. u₁ = Av₁/3 = (1, 0), u₂ = Av₂/2 = (0, −1). U = [1 0; 0 −1], Σ = diag(3, 2). Check: UΣ = [3 0; 0 −2]."],
["Find the principal component and the variance it explains for observations (1, 2), (3, 0), (5, −2).","Mean (3, 0); centered data (−2, 2), (0, 0), (2, −2). S = [4 −4; −4 4] with eigenvalues 8 and 0. The first principal component is (1, −1)/√2 and it explains 8/8 = 100% of the variance."]],
pb:(typeof P7!=="undefined"?P7:[]),
qz:[["A real symmetric 2×2 matrix always has…",["Real eigenvalues","Non-real eigenvalues","Eigenvalue 0","Equal eigenvalues"],0],
["The quadratic form xᵀAx is positive definite if and only if…",["All eigenvalues of A are positive","The trace of A is positive","A is invertible","All entries of A are positive"],0],
["The maximum of xᵀAx on ‖x‖ = 1 (A symmetric) equals…",["The largest eigenvalue","The trace","The determinant","The largest entry of A"],0],
["The singular values of A are…",["Square roots of the eigenvalues of AᵀA","The eigenvalues of A","The entries of A","The determinant of A"],0]],
sb:[["Prove that for a symmetric matrix A, eigenvectors for different eigenvalues are orthogonal.","Let Av₁ = λ₁v₁, Av₂ = λ₂v₂, λ₁ ≠ λ₂. Then λ₁(v₁·v₂) = (Av₁)·v₂ = v₁·(Aᵀv₂) = v₁·(Av₂) = λ₂(v₁·v₂). So (λ₁ − λ₂)(v₁·v₂) = 0. Since λ₁ ≠ λ₂, v₁·v₂ = 0."],
["Orthogonally diagonalize A = [2 −2; −2 5].","λ² − 7λ + 6 = (λ − 6)(λ − 1). For 6: A − 6I = [−4 −2; −2 −1] gives (1, −2)/√5. For 1: [1 −2; −2 4] gives (2, 1)/√5. P = (1/√5)[1 2; −2 1], D = diag(6, 1)."],
["Find the maximum and minimum of Q(x) = 3x₁² + 2x₁x₂ + 3x₂² on ‖x‖ = 1.","A = [3 1; 1 3] has eigenvalues 4 and 2. By the Rayleigh result the maximum is 4, at ±(1, 1)/√2, and the minimum is 2, at ±(1, −1)/√2."]]};
