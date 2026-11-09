var C5={n:5,title:"Eigenvalues and eigenvectors",
sec:[
["5.1 Eigenvectors and eigenvalues","Definitions, eigenspaces, independence",`
<p>For a square matrix A, a nonzero vector x is an <b>eigenvector</b> if Ax = λx for some scalar λ, called the <b>eigenvalue</b>. The set of all solutions of (A − λI)x = 0 is the <b>eigenspace</b> of λ. It is a subspace (a null space), containing 0 and all eigenvectors for λ.</p>
<p>Example: A = [4 1; 2 3]. A(1, 1) = (5, 5), so (1, 1) is an eigenvector with λ = 5. Also A(1, −2) = (2, −4) = 2(1, −2), so λ = 2 has eigenvector (1, −2).</p>
<p><b>Theorem 1.</b> The eigenvalues of a triangular matrix are its diagonal entries.</p>
<details><summary>Proof</summary><p>For upper triangular A, A − λI is triangular with diagonal entries aᵢᵢ − λ. It has a free variable (so Ax = λx has a nontrivial solution) exactly when some diagonal entry aᵢᵢ − λ is 0, that is, when λ equals some aᵢᵢ. The lower triangular case is the same. ∎</p></details>
<p><b>Theorem 2.</b> Eigenvectors v₁, …, vₚ belonging to distinct eigenvalues λ₁, …, λₚ are linearly independent.</p>
<details><summary>Proof</summary><p>Suppose they are dependent. Pick the smallest index k such that vₖ lies in the span of v₁, …, vₖ₋₁, which are independent: vₖ = c₁v₁ + … + cₖ₋₁vₖ₋₁. Apply A: λₖvₖ = c₁λ₁v₁ + … + cₖ₋₁λₖ₋₁vₖ₋₁. Multiply the original equation by λₖ and subtract: 0 = c₁(λ₁ − λₖ)v₁ + … + cₖ₋₁(λₖ₋₁ − λₖ)vₖ₋₁. By independence each cᵢ(λᵢ − λₖ) = 0, and the eigenvalues are distinct, so every cᵢ = 0. Then vₖ = 0, contradicting that eigenvectors are nonzero. ∎</p></details>
<div class="note"><b>Notable points.</b> An eigenvector must be nonzero, but an eigenvalue can be 0. λ = 0 is an eigenvalue of A exactly when A is not invertible. If Ax = λx then Aᵏx = λᵏx, and A⁻¹x = (1/λ)x when A is invertible. Eigenvalues of A + cI are those of A shifted by c.</div>`],
["5.2 The characteristic equation","det(A − λI) = 0, similarity",`
<p>By the Invertible Matrix Theorem, λ is an eigenvalue of A exactly when A − λI is not invertible, that is, when <b>det(A − λI) = 0</b>. This is the <b>characteristic equation</b>, and det(A − λI) is a polynomial of degree n in λ, the <b>characteristic polynomial</b>. The <b>algebraic multiplicity</b> of λ is its multiplicity as a root.</p>
<p>For 2×2 matrices the characteristic polynomial is λ² − (tr A)λ + det A. In general, the sum of the eigenvalues (with multiplicity) equals tr A and their product equals det A.</p>
<p>Example: A = [4 1; 2 3] has λ² − 7λ + 10 = (λ − 5)(λ − 2), so the eigenvalues are 5 and 2.</p>
<p>A and B are <b>similar</b> if A = PBP⁻¹ for some invertible P.</p>
<p><b>Theorem 3.</b> Similar matrices have the same characteristic polynomial, hence the same eigenvalues.</p>
<details><summary>Proof</summary><p>If B = P⁻¹AP, then B − λI = P⁻¹AP − λP⁻¹P = P⁻¹(A − λI)P. So det(B − λI) = det(P⁻¹) det(A − λI) det(P) = det(A − λI), since det(P⁻¹) det(P) = 1. ∎</p></details>
<div class="note"><b>Notable points.</b> A and Aᵀ have the same characteristic polynomial because det(Aᵀ − λI) = det((A − λI)ᵀ) = det(A − λI). Row reduction changes eigenvalues, so never use it to find them. A real matrix can have complex eigenvalues.</div>`],
["5.3 Diagonalization","A = PDP⁻¹, powers, multiplicities",`
<p>A is <b>diagonalizable</b> if A = PDP⁻¹ for an invertible P and diagonal D.</p>
<p><b>Theorem 4 (Diagonalization Theorem).</b> An n×n matrix A is diagonalizable if and only if A has n linearly independent eigenvectors. Then A = PDP⁻¹ where the columns of P are those eigenvectors and the diagonal entries of D are the corresponding eigenvalues.</p>
<details><summary>Proof</summary><p>Let P = [v₁ … vₙ] and D = diag(λ₁, …, λₙ). Then AP = [Av₁ … Avₙ] and PD = [λ₁v₁ … λₙvₙ]. So AP = PD exactly when Avᵢ = λᵢvᵢ for each i. P is invertible exactly when its columns are independent. Hence AP = PD with P invertible (that is, A = PDP⁻¹) if and only if the vᵢ are n independent eigenvectors. ∎</p></details>
<p><b>Theorem 5.</b> If A has n distinct eigenvalues, then A is diagonalizable (by Theorem 2 their eigenvectors are independent).</p>
<p><b>Powers.</b> If A = PDP⁻¹, then Aᵏ = PDᵏP⁻¹, and Dᵏ just raises each diagonal entry to the k-th power. More generally p(A) = P p(D) P⁻¹ for any polynomial p.</p>
<p>Example: A = [7 2; −4 1] has eigenvalues 3 and 5 with eigenvectors (1, −2) and (1, −1). So P = [1 1; −2 −1], D = diag(3, 5), and Aᵏ = P diag(3ᵏ, 5ᵏ) P⁻¹.</p>
<p><b>Multiplicities.</b> The <b>geometric multiplicity</b> of λ is dim of its eigenspace, and it is at most the algebraic multiplicity. A is diagonalizable exactly when the characteristic polynomial factors into linear factors and, for each eigenvalue, the geometric multiplicity equals the algebraic one. Example: [1 1; 0 1] has λ = 1 with algebraic multiplicity 2 but a 1-dimensional eigenspace, so it is not diagonalizable.</p>
<div class="note"><b>Notable points.</b> Distinct eigenvalues are sufficient for diagonalizability but not necessary (the identity matrix is diagonal with repeated eigenvalue 1). Not every matrix is diagonalizable. The order of eigenvectors in P must match the order of eigenvalues in D.</div>`],
["5.4 Eigenvectors and linear transformations","The matrix of a transformation, similarity",`
<p>Let T: V → V be linear and B = {b₁, …, bₙ} a basis. The <b>B-matrix</b> of T is [T]<sub>B</sub> = [ [T(b₁)]<sub>B</sub> … [T(bₙ)]<sub>B</sub> ], and it satisfies [T(x)]<sub>B</sub> = [T]<sub>B</sub>[x]<sub>B</sub>.</p>
<p><b>Theorem 6.</b> If A = PDP⁻¹ with D diagonal, then D is the B-matrix of the transformation x ↦ Ax when B is the basis of ℝⁿ formed by the columns of P.</p>
<details><summary>Proof</summary><p>For x in ℝⁿ, [x]<sub>B</sub> = P⁻¹x and the standard coordinates are x = P[x]<sub>B</sub>. So [Ax]<sub>B</sub> = P⁻¹Ax = P⁻¹(PDP⁻¹)x = D P⁻¹x = D[x]<sub>B</sub>. ∎</p></details>
<p>Example: T(p)(t) = t·p′(t) on P₂ sends 1 → 0, t → t, t² → 2t². In the basis {1, t, t²}, its matrix is diag(0, 1, 2), so its eigenvalues are 0, 1, 2 with eigenvectors 1, t, t².</p>
<div class="note"><b>Notable points.</b> The B-matrix of T is P⁻¹AP, a matrix similar to A. Choosing a basis of eigenvectors makes T as simple as possible: pure stretching along the basis directions. Eigenvalues belong to the transformation, not to a particular matrix representation.</div>`],
["5.5 Complex eigenvalues","Conjugate pairs, rotation and scaling",`
<p>A real matrix can have complex eigenvalues. For example A = [0 −1; 1 0] (rotation by 90°) has characteristic polynomial λ² + 1, so λ = ±i.</p>
<p><b>Theorem 7.</b> If A is real and λ is a complex eigenvalue with eigenvector v, then λ̄ is an eigenvalue with eigenvector v̄. So complex eigenvalues of real matrices come in conjugate pairs.</p>
<details><summary>Proof</summary><p>Take complex conjugates in Av = λv. Since A is real, Ā = A, so Av̄ = λ̄v̄. ∎</p></details>
<p><b>Theorem 8.</b> Let A be a real 2×2 matrix with eigenvalue λ = a − bi (b ≠ 0) and eigenvector v. Then A = PCP⁻¹ where P = [Re v, Im v] and C = [a −b; b a]. The matrix C is a rotation through angle φ times a scaling by r = |λ| = √(a² + b²), where a = r cos φ and b = r sin φ.</p>
<p>Example: A = [0.5 −0.6; 0.75 1.1] has eigenvalues 0.8 ± 0.6i, with |λ| = 1. So A acts as a rotation (by about 37°) on suitable axes with no net scaling.</p>
<div class="note"><b>Notable points.</b> For the real matrix [1 −1; 1 1] the eigenvalues are 1 ± i, so r = √2 and φ = 45°. Complex eigenvalues of a real 2×2 matrix always mean a rotation is involved. |λ| &gt; 1 spirals outward, |λ| &lt; 1 spirals inward.</div>`],
["5.6 Discrete dynamical systems","Long-term behavior of xₖ₊₁ = Axₖ",`
<p>Consider xₖ₊₁ = Axₖ. If A has independent eigenvectors v₁, …, vₙ and x₀ = c₁v₁ + … + cₙvₙ, then <b>xₖ = c₁λ₁ᵏv₁ + … + cₙλₙᵏvₙ</b>.</p>
<p><b>Behavior.</b> If every |λᵢ| &lt; 1, xₖ → 0 (the origin is an <b>attractor</b>). If every |λᵢ| &gt; 1, solutions grow (a <b>repeller</b>). If some |λ| &gt; 1 and some |λ| &lt; 1, the origin is a <b>saddle point</b>. If one eigenvalue λ₁ strictly dominates the others in size (with c₁ ≠ 0), then for large k, xₖ ≈ c₁λ₁ᵏv₁, so the direction of xₖ approaches the direction of v₁.</p>
<p>Example (predator-prey model): A = [0.5 0.4; −0.104 1.1] has eigenvalues 1.02 and 0.58 with dominant eigenvector (10, 13). So both populations grow about 2% per step in the long run, with the ratio near 10 : 13.</p>
<div class="note"><b>Notable points.</b> Eigenvalues with |λ| = 1 give neither growth nor decay. Complex eigenvalues with |λ| &lt; 1 give spirals into the origin. The fastest way to find the long-term behavior is to find the eigenvalue of largest absolute value.</div>`],
["5.7 Differential equations","Solving x′ = Ax",`
<p>If A has independent eigenvectors v₁, …, vₙ, the general solution of x′ = Ax is <b>x(t) = c₁e^(λ₁t)v₁ + … + cₙe^(λₙt)vₙ</b>. Each term works since d/dt (e^(λt)v) = λe^(λt)v = A(e^(λt)v).</p>
<p>Example: A = [1 3; 3 1] has eigenvalues 4 (eigenvector (1, 1)) and −2 (eigenvector (1, −1)). For x(0) = (5, 1) we need c₁ + c₂ = 5 and c₁ − c₂ = 1, so c₁ = 3 and c₂ = 2. Then x(t) = 3e^(4t)(1, 1) + 2e^(−2t)(1, −1).</p>
<p><b>Stability.</b> If all eigenvalues have negative real part, solutions tend to 0 (attractor or sink). If all have positive real part, solutions blow up (repeller or source). Mixed signs give a saddle. Complex eigenvalues a ± bi give real solutions built from e^(at)cos bt and e^(at)sin bt: a spiral if a ≠ 0, closed ellipses if a = 0.</p>
<p><b>Higher-order equations.</b> y″ − 3y′ + 2y = 0 becomes x′ = Ax with x = (y, y′) and A = [0 1; −2 3]. Its eigenvalues are 1 and 2, so y = c₁eᵗ + c₂e²ᵗ.</p>
<div class="note"><b>Notable points.</b> Solutions of x′ = Ax form an n-dimensional vector space. The exponential e^(λt) replaces λᵏ from the discrete case. In the discrete case stability needs |λ| &lt; 1, in the continuous case it needs Re λ &lt; 0.</div>`],
["5.8 Iterative estimates for eigenvalues","The power method",`
<p>The <b>power method</b> estimates the dominant eigenvalue of A (the one with the largest absolute value, assumed strictly larger than the others). Start with x₀ having a nonzero component along the dominant eigenvector. Repeat: compute Axₖ, set μₖ = the entry of largest absolute value, and let xₖ₊₁ = Axₖ/μₖ. Then μₖ → λ₁ and xₖ → the dominant eigenvector.</p>
<details><summary>Why it converges</summary><p>Write x₀ = c₁v₁ + … + cₙvₙ with c₁ ≠ 0. Then Aᵏx₀ = c₁λ₁ᵏv₁ + … + cₙλₙᵏvₙ = λ₁ᵏ( c₁v₁ + c₂(λ₂/λ₁)ᵏv₂ + … ). Since |λᵢ/λ₁| &lt; 1 for i ≥ 2, the extra terms vanish, so the direction of Aᵏx₀ approaches v₁. The error shrinks like |λ₂/λ₁|ᵏ. ∎</p></details>
<p>Example: A = [2 1; 1 3] with x₀ = (1, 1) gives Ax₀ = (3, 4), scaled to (0.75, 1). Next Ax = (2.5, 3.75), scaled to (0.667, 1), and the scale factors approach 3.618, the true dominant eigenvalue (5 + √5)/2.</p>
<div class="note"><b>Notable points.</b> Convergence is slow if |λ₂/λ₁| is near 1. To get the smallest eigenvalue, apply the power method to A⁻¹. To get the eigenvalue nearest α, apply it to (A − αI)⁻¹ (inverse power method).</div>`]],
pr:[
["Find the eigenvalues and eigenspaces of A = [4 1; 2 3].","λ² − 7λ + 10 = (λ − 5)(λ − 2). For λ = 5: A − 5I = [−1 1; 2 −2] gives (1, 1). For λ = 2: A − 2I = [2 1; 2 1] gives (1, −2)."],
["Diagonalize A = [7 2; −4 1].","tr = 8, det = 15, so λ = 3, 5. For 3: (1, −2). For 5: (1, −1). P = [1 1; −2 −1], D = diag(3, 5). Check: P⁻¹ = [−1 −1; 2 1] and PDP⁻¹ = [7 2; −4 1]."],
["Show that [1 1; 0 1] is not diagonalizable.","The eigenvalue is 1 with algebraic multiplicity 2. A − I = [0 1; 0 0] has rank 1, so its null space has dimension 1. Only one independent eigenvector exists, but 2 are needed."],
["Find the eigenvalues of [0 −1; 1 0] and interpret them.","λ² + 1 = 0 gives λ = ±i with |λ| = 1. This is a 90° rotation, so no real vector keeps its direction, which is why the eigenvalues are not real."],
["For xₖ₊₁ = Axₖ with A = [0.5 0.4; −0.104 1.1], describe the long-term behavior.","Eigenvalues are 1.02 and 0.58. The dominant 1.02 gives growth of 2% per step, in the direction of its eigenvector (10, 13). The 0.58 component dies out."],
["Solve x′ = Ax for A = [1 3; 3 1] with x(0) = (5, 1).","Eigenpairs: 4 with (1, 1), −2 with (1, −1). Solve c₁ + c₂ = 5, c₁ − c₂ = 1 to get c₁ = 3, c₂ = 2. x(t) = 3e^(4t)(1, 1) + 2e^(−2t)(1, −1)."]],
pb:(typeof P5!=="undefined"?P5:[]),
qz:[["The eigenvalues of [2 5; 0 −3] are…",["2 and −3","5 and 0","2 and 5","−3 and 5"],0],
["A 3×3 matrix with 3 distinct eigenvalues is…",["Always diagonalizable","Never diagonalizable","Diagonalizable only if symmetric","Diagonalizable only if invertible"],0],
["If λ is an eigenvalue of A, then an eigenvalue of A² is…",["λ²","2λ","1/λ","λ + 1"],0],
["A real 2×2 matrix has eigenvalue 1 + 2i. Another eigenvalue is…",["−1 − 2i","1 − 2i","2 + i","0"],1]],
sb:[["Prove that eigenvectors v₁, v₂ of A for distinct eigenvalues λ₁ ≠ λ₂ are linearly independent.","Suppose c₁v₁ + c₂v₂ = 0. Apply A: c₁λ₁v₁ + c₂λ₂v₂ = 0. Subtract λ₂ times the first equation: c₁(λ₁ − λ₂)v₁ = 0. Since v₁ ≠ 0 and λ₁ ≠ λ₂, c₁ = 0. Then c₂v₂ = 0 gives c₂ = 0."],
["Find the eigenvalues of A = [2 1; 1 2] and diagonalize it.","λ² − 4λ + 3 = (λ − 3)(λ − 1). For 3: (1, 1). For 1: (1, −1). P = [1 1; 1 −1], D = diag(3, 1), and A = PDP⁻¹."],
["Prove that A and Aᵀ have the same eigenvalues.","det(Aᵀ − λI) = det((A − λI)ᵀ) = det(A − λI), because a matrix and its transpose have the same determinant. So the characteristic polynomials are equal, and hence so are the eigenvalues."]]};
